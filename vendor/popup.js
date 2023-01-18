let btnEdit = document.querySelector('.profile__edit-button');
let btnClose = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');


let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');

function popupShow() {
  document.querySelector('.popup').classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function popupClose() {
  document.querySelector('.popup').classList.remove('popup_opened');
}

btnEdit.addEventListener('click', popupShow);
btnClose.addEventListener('click', popupClose);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', handleFormSubmit);
