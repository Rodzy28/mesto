import Section from './Section.js';
import { initialCards } from './constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js'
import UserInfo from './UserInfo.js';

// Попап
// const allPopups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('.popup_type_profile');
const cardPopup = document.querySelector('.popup_type_card');
const imagePopup = document.querySelector('.popup_type_image');
// const imageViewing = imagePopup.querySelector('.popup__image-viewing');
// const imageTitle = imagePopup.querySelector('.popup__image-title');

// Инпуты попап
// const nameInput = document.querySelector('.popup__input_type_name');
// const jobInput = document.querySelector('.popup__input_type_job');
// const placeInput = document.querySelector('.popup__input_type_place');
// const srcInput = document.querySelector('.popup__input_type_src');
// Формы попап
// const formElementProfile = document.querySelector('.popup__form-profile');
// const formElementCard = document.querySelector('.popup__form-card');
// Кнопки попап
const btnEdit = document.querySelector('.profile__edit-button');
const btnAddCard = document.querySelector('.profile__add-button');
// Получение активных данных профиля
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
// Шаблон карточек
const listCards = document.querySelector('.place__list');

// Конфиг с селекторами и классами формы
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

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

// const jobsArray = [
//   'Папин бродяга, Мамин симоптяга',
//   'Городской сумасшедший',
//   'Вечно молодой, вечно ворчливый, как старый дед',
// ];

// function fillRandomJob() {
//   const index = Math.floor(Math.random() * jobsArray.length);
//   profileJob.textContent = jobsArray[index];
// }
// fillRandomJob();

