// Конфиг с селекторами и классами формы
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// Попапы
export const profilePopup = document.querySelector('.popup_type_profile');
export const cardPopup = document.querySelector('.popup_type_card');
export const imagePopup = document.querySelector('.popup_type_image');

// Инпуты попап профиля
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');

// Кнопки открытия попапов
export const btnEdit = document.querySelector('.profile__edit-button');
export const btnAddCard = document.querySelector('.profile__add-button');

// Получение активных данных профиля
export const nameSelector = document.querySelector('.profile__name');
export const aboutSelector = document.querySelector('.profile__job');

// Шаблон карточек
export const listCards = document.querySelector('.place__list');
