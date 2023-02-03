// Попап
const popupProfile = document.querySelector('.popup_type_profile');
const popupCard = document.querySelector('.popup_type_card');
// Инпуты попап
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
// Формы попап
const formElement = document.querySelector('.popup__form-profile');
// Кнопки попап
const btnEdit = document.querySelector('.profile__edit-button');
const btnClose = document.querySelector('.popup__close-button');
const addCard = document.querySelector('.profile__add-button');
// Получение активных данных профиля
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
// Первые 6 карточек
const initialCards = [
  {name: 'Шри-Ланка', link: './images/pictures/sri_lanka.jpg'},
  {name: 'Кипр', link: './images/pictures/cyprus.jpg'},
  {name: 'Белёв', link: './images/pictures/belev.jpg'},
  {name: 'Собачий приют - Некрасовка', link: './images/pictures/nekrasovka.jpg'},
  {name: 'Тайланд', link: './images/pictures/thailand.jpg'},
  {name: 'Дубай', link: './images/pictures/dubai.jpg'}
  ];

function popupOpen(popup) {
  popup.classList.add('popup_opened');
}

function popupClose() {
  popupProfile.classList.remove('popup_opened');
}

btnEdit.addEventListener('click', () => {
  popupOpen(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

addCard.addEventListener('click', () => {
  popupOpen(popupCard);
});

btnClose.addEventListener('click', popupClose);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', handleFormSubmit);

const listCards = document.querySelector('.place__list');
const templateCard = document.querySelector('.place__card').content.querySelector('.place__item');

function renderCards() {
  initialCards.forEach((item) => {
    const card = templateCard.cloneNode(true);
    const btnLike = card.querySelector('.place__like-button');
    card.querySelector('.place__text').textContent = item.name;
    card.querySelector('.place__picture').src = item.link;
    btnLike.addEventListener('click', likeBtnActive);
    listCards.append(card);
  });
}

renderCards();

function likeBtnActive (event) {
  event.target.classList.toggle('place__like-button_active');
}
