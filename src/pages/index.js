import './index.css';
import Section from '../components/Section.js';
import {
  config, profilePopup,
  cardPopup, imagePopup,
  btnEdit, btnAddCard,
  profileName, profileJob,
  nameInput, jobInput, listCards
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: 'a12736da-b955-4664-b6d4-b697b2666b6e',
    'Content-Type': 'application/json'
  }
});

api.getInitialCards()
  .then((data) => {
    const cardRender = new Section({ data, renderer: createCard }, listCards);
    return cardRender.renderDefaultCards();
  })
  .catch((err) => {
    console.log(err);
  });

const userInfo = new UserInfo({ profileName, profileJob });

const profileCheck = new FormValidator(config, profilePopup);
profileCheck.enableValidation();

const cardCheck = new FormValidator(config, cardPopup);
cardCheck.enableValidation();

const popupWithImage = new PopupWithImage(imagePopup);
const openImagePopup = (data) => {
  popupWithImage.open(data)
}
popupWithImage.setEventListeners();

// Функция возврата новой карточки через класс
function createCard(data) {
  const card = new Card(data, '.place__card', openImagePopup);
  return card.generateCard();
}

const handleFormSubmitCard = ({ place, url }) => {
  api.postNewCard({ name: place, link:url })
    .then((data) => {
      const cardRender = new Section({ data, renderer: createCard }, listCards);
      cardRender.addItem(createCard(data));
    });

}

const handleFormSubmitProfile = ({ name, job }) => {
  userInfo.setUserInfo({ name, job });
}

const popupAddNewProfile = new PopupWithForm(profilePopup, handleFormSubmitProfile);
popupAddNewProfile.setEventListeners();

const popupAddNewCard = new PopupWithForm(cardPopup, handleFormSubmitCard);
popupAddNewCard.setEventListeners();

// Открывашки попапов
btnEdit.addEventListener('click', () => {
  profileCheck.resetErrorMessage();
  profileCheck.disableSubmitButton();
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;
  popupAddNewProfile.open();
});

// Скидываю ранее введенный данные в попап новой карточки
btnAddCard.addEventListener('click', () => {
  cardCheck.resetErrorMessage();
  cardCheck.disableSubmitButton();
  popupAddNewCard.open();
});
