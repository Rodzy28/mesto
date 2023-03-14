export class Card {
  constructor(data, templateSelector, openImagePopup) {
    this._newPlace = data.name;
    this._newSrc = data.link;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._placePicture = this._element.querySelector('.place__picture');
    this._placePicture.src = this._newSrc;
    this._placePicture.alt = this._newPlace;
    this._element.querySelector('.place__text').textContent = this._newPlace;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.place__like-button').addEventListener('click', () => {
      this._handleButtonLike();
    });
    this._element.querySelector('.place__trash-button').addEventListener('click', () => {
      this._handleButtonTrash();
    });
    this._placePicture.addEventListener('click', () => {
      this._openCardView();
    })
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.place__item').cloneNode(true);
    return cardElement;
  }

  _handleButtonLike() {
    this._element.querySelector('.place__like-button').classList.toggle('place__like-button_active');
  }

  _handleButtonTrash() {
    this._element.remove();
  }

  _openCardView() {
    this._openImagePopup({ name: this._newPlace, link: this._newSrc });
  }
}
