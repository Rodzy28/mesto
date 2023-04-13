import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, handleFormSubmit) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._btnSubmit = this._form.querySelector('.popup__save-button');
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach(input => formValues[input.name] = input.value);
    return formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const initialText = this._btnSubmit.textContent;
      this._btnSubmit.textContent = 'Сохранение...';
      this._handleFormSubmit(this._getInputValues())
        .then(() => this.close())
        .finally(() => {
          this._btnSubmit.textContent = initialText;
        });
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
