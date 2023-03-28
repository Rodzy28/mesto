import './index.css';
import Section from '../components/Section.js';
import {
  initialCards,
  config, profilePopup,
  cardPopup, imagePopup,
  btnEdit, btnAddCard,
  profileName, profileJob, listCards
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js';

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

const cardRender = new Section({ items: initialCards, renderer: createCard }, listCards);
cardRender.renderDefaultCards();

const handleFormSubmitCard = ({ place, url }) => {
  cardRender.addItem(createCard({ name: place, link: url }));
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
  popupAddNewProfile.open();
  userInfo.getUserInfo();
});

// Скидываю ранее введенный данные в попап новой карточки
btnAddCard.addEventListener('click', () => {
  cardCheck.resetErrorMessage();
  cardCheck.disableSubmitButton();
  popupAddNewCard.open();
});
