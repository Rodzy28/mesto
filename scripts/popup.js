const popupProfile = document.querySelector('.popup_type_profile');
const btnEdit = document.querySelector('.profile__edit-button');
const btnClose = document.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popupCard = document.querySelector('.popup_type_card');
const addCard = document.querySelector('.profile__add-button');

// Раскидать этот бордак выше и ниже. Все упорядочить

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
