export class Card {
  constructor(data, templateSelector, viewingCard) {
    this._newPlace = data.name;
    this._newSrc = data.link;
    this._templateSelector = templateSelector;
    this._viewingCard = viewingCard;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.place__item').cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.place__like-button').addEventListener('click', () => {
      this._handleButtonLike();
    });
    this._element.querySelector('.place__trash-button').addEventListener('click', () => {
      this._handleButtonTrash();
    });
    this._element.querySelector('.place__picture').addEventListener('click', () => {
      this._openCardView();
    })
  }

  _handleButtonLike() {
    this._element.querySelector('.place__like-button').classList.toggle('place__like-button_active');
  }

  _handleButtonTrash() {
    this._element.remove();
  }

  _openCardView() {
    this._viewingCard({name: this._newPlace, link: this._newSrc});
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.place__picture').src = this._newSrc;
    this._element.querySelector('.place__picture').alt = this._newPlace;
    this._element.querySelector('.place__text').textContent = this._newPlace;
    return this._element;
  }
}
