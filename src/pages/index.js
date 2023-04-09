import './index.css';
import Section from '../components/Section.js';
import {
  config, profilePopup,
  cardPopup, imagePopup,
  btnEdit, btnAddCard,
  nameSelector, aboutSelector,
  nameInput, jobInputSelector, listCards
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
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
  .then(([ userData, cards ]) => {
    userID = userData._id;
    cardRender.renderCardsFromServer(cards);
    userInfo.setUserInfo(userData);
}).catch((err) => {
  console.log(err);
});

const cardRender = new Section({ renderer: createCard }, listCards);
const userInfo = new UserInfo({ nameSelector, aboutSelector });
const profileCheck = new FormValidator(config, profilePopup);
const cardCheck = new FormValidator(config, cardPopup);

profileCheck.enableValidation();
cardCheck.enableValidation();

const popupWithImage = new PopupWithImage(imagePopup);
const openImagePopup = (data) => {
  popupWithImage.open(data)
}
popupWithImage.setEventListeners();

function createCard(data) {
  const card = new Card(data, '.place__card', openImagePopup);
  return card.generateCard();
}

const handleFormSubmitCard = ({ place, url }) => {
  api.postNewCard({ name: place, link: url })
    .then((data) => {
      return cardRender.addItem(createCard(data));
    }).catch((err) => {
      console.log(err);
    });
}

const handleFormSubmitProfile = ({ name, job }) => {
  api.setUserInfo({ name: name, about: job })
  .then((data) => {
    userInfo.setUserInfo(data);
  }).catch((err) => {
    console.log(err);
  });;
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
  jobInputSelector.value = job;
  popupAddNewProfile.open();
});

// Скидываю ранее введенный данные в попап новой карточки
btnAddCard.addEventListener('click', () => {
  cardCheck.resetErrorMessage();
  cardCheck.disableSubmitButton();
  popupAddNewCard.open();
});
