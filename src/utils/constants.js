// Первые 6 карточек
import sri_lanka from '../images/pictures/sri_lanka.jpg';
import cyprus from '../images/pictures/cyprus.jpg';
import belev from '../images/pictures/belev.jpg';
import nekrasovka from '../images/pictures/nekrasovka.jpg';
import thailand from '../images/pictures/thailand.jpg';
import dubai from '../images/pictures/dubai.jpg';

export const initialCards = [
  { name: 'Шри-Ланка', link: sri_lanka },
  { name: 'Кипр', link: cyprus },
  { name: 'Белёв', link: belev },
  { name: 'Собачий приют - Некрасовка', link: nekrasovka },
  { name: 'Тайланд', link: thailand },
  { name: 'Дубай', link: dubai }
];

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
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');

// Шаблон карточек
export const listCards = document.querySelector('.place__list');
