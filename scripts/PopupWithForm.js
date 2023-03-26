import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, handleFormSubmit) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.popup__input');
    const formValues = {};
    this._inputList.forEach(input => formValues[input.name] = input.value);
    return formValues;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
