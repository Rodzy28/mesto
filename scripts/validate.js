const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const btnSubmit = formElement.querySelector(config.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', ()=> {
      checkInputValidity(formElement, inputElement, config);
    });
  });
};

const checkInputValidity = (formElement,inputElement, config) => {
  if (!inputElement.validity.valid) {
    showErrorMessage(formElement, inputElement, config);
  } else {
    hideErrorMessage(formElement, inputElement, config);
  }
};

const showErrorMessage = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
};

const hideErrorMessage = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.remove(config.inputErrorClass);
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, btnSubmit, config) => {
  if (hasInvalidInput(inputList)) {
    btnSubmit.classList.add(config.inactiveButtonClass);
    btnSubmit.setAttribute('disabled', 'disabled');
  } else {
    btnSubmit.removeAttribute('disabled');
    btnSubmit.classList.remove(config.inactiveButtonClass);
  }
};


enableValidation(config);
