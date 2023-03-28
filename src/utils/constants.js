// Первые 6 карточек
export const initialCards = [
  { name: 'Шри-Ланка', link: './images/pictures/sri_lanka.jpg' },
  { name: 'Кипр', link: './images/pictures/cyprus.jpg' },
  { name: 'Белёв', link: './images/pictures/belev.jpg' },
  { name: 'Собачий приют - Некрасовка', link: './images/pictures/nekrasovka.jpg' },
  { name: 'Тайланд', link: './images/pictures/thailand.jpg' },
  { name: 'Дубай', link: './images/pictures/dubai.jpg' }
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
