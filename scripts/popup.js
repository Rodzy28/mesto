// Попап
const profilePopup = document.querySelector('.popup_type_profile');
const cardPopup = document.querySelector('.popup_type_card');
// Инпуты попап
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const placeInput = document.querySelector('.popup__input_type_place');
const srcInput = document.querySelector('.popup__input_type_src');
// Формы попап
const formElement = document.querySelector('.popup__form-profile');
const formElementCard = document.querySelector('.popup__form-card');
// Кнопки попап
const btnEdit = document.querySelector('.profile__edit-button');
const btnAddCard = document.querySelector('.profile__add-button');
const btnCloseProfile = profilePopup.querySelector('.popup__close-button');
const btnCloseCard = cardPopup.querySelector('.popup__close-button');
// Получение активных данных профиля
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
// Шаблон карточек
const listCards = document.querySelector('.place__list');
const templateCard = document.querySelector('.place__card').content.querySelector('.place__item');
// Первые 6 карточек
const initialCards = [
  { name: 'Шри-Ланка', link: './images/pictures/sri_lanka.jpg' },
  { name: 'Кипр', link: './images/pictures/cyprus.jpg' },
  { name: 'Белёв', link: './images/pictures/belev.jpg' },
  { name: 'Собачий приют - Некрасовка', link: './images/pictures/nekrasovka.jpg' },
  { name: 'Тайланд', link: './images/pictures/thailand.jpg' },
  { name: 'Дубай', link: './images/pictures/dubai.jpg' }
];

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Открывашки попапов
btnEdit.addEventListener('click', () => {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

btnAddCard.addEventListener('click', () => {
  openPopup(cardPopup);
});

// Закрывашки попапов
btnCloseProfile.addEventListener('click', () => {
  closePopup(profilePopup);
  });

btnCloseCard.addEventListener('click', () => {
  closePopup(cardPopup);
})

// Получаю новые данные профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
}
formElement.addEventListener('submit', handleFormSubmit);

// Создаю карточку
function cardTemplate(newPlace, newSrc) {
  const card = templateCard.cloneNode(true);
  card.querySelector('.place__text').textContent = newPlace;
  card.querySelector('.place__picture').src = newSrc;
  card.querySelector('.place__picture').alt = newPlace;
  const btnLike = card.querySelector('.place__like-button');
  const btnTrash = card.querySelector('.place__trash-button');
  btnLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('place__like-button_active');
  });
  btnTrash.addEventListener('click', () => {
    card.remove();
  });
  return card;
}

// Получаю данные на новую карточку от пользователя
function handleFormSubmitCard(evt) {
  evt.preventDefault();
  const card = cardTemplate(placeInput.value, srcInput.value);
  closePopup(cardPopup);
  listCards.prepend(card);
}
formElementCard.addEventListener('submit', handleFormSubmitCard);

// Показываю 6 дефолтных карточек
function defaultCards() {
  initialCards.forEach((item) => {
    listCards.append(cardTemplate(item.name, item.link));
  });
}
defaultCards();
