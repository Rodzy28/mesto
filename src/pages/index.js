import './index.css';
import Section from '../components/Section.js';
import {
  config, profilePopup, avatarPopup,
  cardPopup, imagePopup, popupDelete,
  btnEdit, btnAddCard, btnEditAvatar,
  nameSelector, aboutSelector, avatarSelector,
  listCards
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

let userID = null;

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: 'a12736da-b955-4664-b6d4-b697b2666b6e',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userID = userData._id;
    cardRender.renderCardsFromServer(cards);
    userInfo.setUserInfo(userData);
  }).catch((err) => {
    console.log(err);
  });

const createCard = (data) => {
  const card = new Card(data, userID, '.place__card', openImagePopup,
    {
      handleAddLike: () => {
        return api.addLike(data._id)
          .then((res) => {
            card.likesCounter(res);
            card.addLike();
          }).catch((err) => {
            console.log(err);
          });
      },
      handleRemoveLike: () => {
        return api.deleteLike(data._id)
          .then((res) => {
            card.likesCounter(res);
            card.removeLike();
          }).catch((err) => {
            console.log(err);
          });
      },
      handleTrashButton: () => {
        const cardId = () => {
          return api.deleteCard(data._id)
            .then(() => {
              card.deleteCard();
              popupWithConfirm.close();
            }).catch((err) => {
              console.log(err);
            });
        };
        popupWithConfirm.open();
        popupWithConfirm.transferCardId(cardId);
      }
    });
  return card.generateCard();
};

const cardRender = new Section({ renderer: createCard }, listCards);
const userInfo = new UserInfo({ nameSelector, aboutSelector, avatarSelector });
const profileCheck = new FormValidator(config, profilePopup);
const cardCheck = new FormValidator(config, cardPopup);
const avatarCheck = new FormValidator(config, avatarPopup);

profileCheck.enableValidation();
cardCheck.enableValidation();
avatarCheck.enableValidation();

const popupWithImage = new PopupWithImage(imagePopup);
const openImagePopup = (data) => {
  popupWithImage.open(data)
}
popupWithImage.setEventListeners();

const handleFormSubmitCard = ({ place, url }) => {
  return api.postNewCard({ name: place, link: url })
    .then((data) => {
      cardRender.addItem(createCard(data));
    }).catch((err) => {
      console.log(err);
    });
}

const handleFormSubmitProfile = ({ name, job }) => {
  return api.setUserInfo({ name: name, about: job })
    .then((data) => {
      userInfo.setUserInfo(data);
    }).catch((err) => {
      console.log(err);
    });
}

const handleFormSubmitAvatar = ({ avatar }) => {
  return api.setAvatar({ avatar: avatar })
    .then((data) => {
      userInfo.setUserAvatar(data);
    }).catch((err) => {
      console.log(err);
    });
}

const popupAddNewProfile = new PopupWithForm(profilePopup, handleFormSubmitProfile);
popupAddNewProfile.setEventListeners();

const popupAddNewCard = new PopupWithForm(cardPopup, handleFormSubmitCard);
popupAddNewCard.setEventListeners();

const popupAddNewAvatar = new PopupWithForm(avatarPopup, handleFormSubmitAvatar);
popupAddNewAvatar.setEventListeners();

const popupWithConfirm = new PopupWithConfirm(popupDelete);
popupWithConfirm.setEventListeners();

btnEdit.addEventListener('click', () => {
  profileCheck.resetErrorMessage();
  profileCheck.disableSubmitButton();
  popupAddNewProfile.setInputValues(userInfo.getUserInfo());
  popupAddNewProfile.open();
});

btnAddCard.addEventListener('click', () => {
  cardCheck.resetErrorMessage();
  cardCheck.disableSubmitButton();
  popupAddNewCard.open();
});

btnEditAvatar.addEventListener('click', () => {
  avatarCheck.resetErrorMessage();
  avatarCheck.disableSubmitButton();
  popupAddNewAvatar.open();
})
