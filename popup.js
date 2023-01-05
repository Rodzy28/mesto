let popup = document.querySelector('.profile__edit-button');
let popupShow = document.querySelector('.popup');
let popupUnShow = document.querySelector('.popup__close-button');

function openPopup () {
  popupShow.classList.toggle('popup_opened');
}

popup.addEventListener('click', openPopup);
popupUnShow.addEventListener('click', openPopup);
