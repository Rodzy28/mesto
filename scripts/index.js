import { initialCards } from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

// Попап
const allPopups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('.popup_type_profile');
const cardPopup = document.querySelector('.popup_type_card');
const imagePopup = document.querySelector('.popup_type_image');
const imageViewing = imagePopup.querySelector('.popup__image-viewing');
const imageTitle = imagePopup.querySelector('.popup__image-title');
// Инпуты попап
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const placeInput = document.querySelector('.popup__input_type_place');
const srcInput = document.querySelector('.popup__input_type_src');
// Формы попап
const formElementProfile = document.querySelector('.popup__form-profile');
const formElementCard = document.querySelector('.popup__form-card');
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

const profileCheck = new FormValidator(config, profilePopup);
profileCheck.enableValidation();

const cardCheck = new FormValidator(config, cardPopup);
cardCheck.enableValidation();

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
}

function openImagePopup(data) {
  openPopup(imagePopup);
  imageViewing.src = data.link;
  imageViewing.alt = data.name;
  imageTitle.textContent = data.name;
}

// Открывашки попапов
btnEdit.addEventListener('click', () => {
  profileCheck.resetErrorMessage();
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

// Скидывыю ранее введенный данные в попап новой карточки
btnAddCard.addEventListener('click', () => {
  cardCheck.resetErrorMessage();
  formElementCard.reset();
  openPopup(cardPopup);
});

// Закрывашка попапов
allPopups.forEach((item) => {
  item.querySelector('.popup__close-button').addEventListener('click', () => {
    closePopup(item);
  });

  item.addEventListener('mousedown', (e) => {
    if (e.target === e.currentTarget) {
      closePopup(item);
    }
  });
});

// Закрытие попапов по ESCейпу
const closePopupEscape = (e) => {
  if (e.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

// Получить новые данные имени и профессии от пользователя
function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
}
formElementProfile.addEventListener('submit', handleFormSubmitProfile);

// Функция возврата новой карточки через класс
function createCard(data) {
  const card = new Card(data, '.place__card', openImagePopup);
  return card.generateCard();
}

// Получить новое имя места, ссылку, добавить на сайт карточку
function handleFormSubmitCard(evt) {
  evt.preventDefault();
  const data = { name: placeInput.value, link: srcInput.value };
  closePopup(cardPopup);
  listCards.prepend(createCard(data));
}
formElementCard.addEventListener('submit', handleFormSubmitCard);

// Показать дефолтные карточки
initialCards.forEach((item) => {
  listCards.append(createCard(item));
});

const jobsArray = [
  'Папин бродяга, Мамин симоптяга',
  'Городской сумасшедший',
  'Вечно молодой, вечно ворчливый, как старый дед',
];

function fillRandomJob() {
  const index = Math.floor(Math.random() * jobsArray.length);
  profileJob.textContent = jobsArray[index];
}
fillRandomJob();

