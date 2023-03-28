import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._image = this._popup.querySelector('.popup__image-viewing');
    this._title = this._popup.querySelector('.popup__image-title');
  }

  open(data) {
    this._image.src = data.link;
    this._image.alt = data.name;
    this._title.textContent = data.name;
    super.open();
  }

}
