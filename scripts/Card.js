class Card {
  constructor(newPlace, newSrc) {
    this._newPlace = newPlace;
    this._newSrc = newSrc;
  }

  _getTemplate() {
    const cardElement = document.querySelector('.place__card').content.querySelector('.place__item').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.place__picture').src = this._newSrc;
    this._element.querySelector('.place__picture').alt = this._newPlace;
    this._element.querySelector('.place__text').textContent = this._newPlace;
    return this._element;
  }
}
