let popup = document.querySelector('.profile__edit-button');

let popupShow = document.querySelector('.popup');
let popupUnShow = document.querySelector('.popup__close-button');

function editPopup () {
  popupShow.classList.toggle('popup_opened');
}

popup.addEventListener('click', editPopup);
popupUnShow.addEventListener('click', editPopup);
