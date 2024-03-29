export default class Popup {
  constructor(popupElement) {
    this._popup = popupElement;
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (e) => {
      if (e.target === e.currentTarget) {
        this.close();
      }
    });

    this._popup.querySelector('.popup__close-button').addEventListener('click', () => {
      this.close();
    });
  }

}
