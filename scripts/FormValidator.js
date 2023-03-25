export class FormValidator {
  constructor(config, checkForm) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._checkForm = checkForm;
  }

  enableValidation() {
    this._setEventListeners();
  }

  disableSubmitButton(evt) {
    evt.submitter.setAttribute('disabled', 'disabled');
    evt.submitter.classList.add(this._inactiveButtonClass);
  }

  _setEventListeners() {
    this._inputList = Array.from(this._checkForm.querySelectorAll(this._inputSelector));
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showErrorMessage(inputElement);
    } else {
      this._hideErrorMessage(inputElement);
    }
  }

  _showErrorMessage(inputElement) {
    const errorElement = this._checkForm.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass);
  }

  _hideErrorMessage(inputElement) {
    const errorElement = this._checkForm.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }

  _toggleButtonState() {
    this._btnSubmit = this._checkForm.querySelector(this._submitButtonSelector);
    if (this._hasInvalidInput()) {
      this._btnSubmit.classList.add(this._inactiveButtonClass);
      this._btnSubmit.setAttribute('disabled', 'disabled');
    } else {
      this._btnSubmit.removeAttribute('disabled');
      this._btnSubmit.classList.remove(this._inactiveButtonClass);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  resetErrorMessage() {
    this._inputList.forEach((inputElement) => {
      this._hideErrorMessage(inputElement);
    });
  }
}
