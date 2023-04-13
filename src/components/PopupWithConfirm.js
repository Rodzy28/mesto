import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._form = this._popup.querySelector('.popup__form');
  }

  transferCardId(cardId) {
    this._cardId = cardId;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._cardId();
    });
  }
}
