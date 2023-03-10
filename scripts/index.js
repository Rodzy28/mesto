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
const templateCard = document.querySelector('.place__card').content.querySelector('.place__item');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
}

// Открывашки попапов
btnEdit.addEventListener('click', () => {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

btnAddCard.addEventListener('click', () => {
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

// Создать карточку нового места
function createNewCard(newPlace, newSrc) {
  const card = templateCard.cloneNode(true);
  const showCardPicture = card.querySelector('.place__picture');
  const btnLike = card.querySelector('.place__like-button');
  const btnTrash = card.querySelector('.place__trash-button');
  showCardPicture.src = newSrc;
  showCardPicture.alt = newPlace;
  card.querySelector('.place__text').textContent = newPlace;
  btnLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('place__like-button_active');
  });
  btnTrash.addEventListener('click', () => {
    card.remove();
  });
  card.querySelector('.place__picture').addEventListener('click', () => {
    openPopup(imagePopup);
    imageViewing.src = newSrc;
    imageViewing.alt = newPlace;
    imageTitle.textContent = newPlace;
  })
  return card;
}

// Получить новое имя места, ссылку, добавить на сайт карточку
function handleFormSubmitCard(evt) {
  evt.preventDefault();
  const card = createNewCard(placeInput.value, srcInput.value);
  closePopup(cardPopup);
  listCards.prepend(card);
  evt.submitter.setAttribute('disabled', 'disabled');
  evt.submitter.classList.add(config.inactiveButtonClass);
}
formElementCard.addEventListener('submit', handleFormSubmitCard);

// Показать 6 дефолтных карточек
function renderDefaultCards() {
  initialCards.forEach((item) => {
    listCards.append(createNewCard(item.name, item.link));

  });
}
renderDefaultCards();

const jobsArray = [
  'Папин бродяга, Мамин симоптяга',
  'Городской сумасшедший',
  'Вечно молодой, вечно пьяный'
];

function fillRandomJob() {
  const index = Math.floor(Math.random() * jobsArray.length);
  profileJob.textContent = jobsArray[index];
}
fillRandomJob();

