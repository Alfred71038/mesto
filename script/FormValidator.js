class FormValidator {
  constructor(object, form) {
    this._form = form;
    this._formInput = object.formInput;
    this._popupInputTypeError = object.popupInputTypeError;
    this._popupSpanErrorActive = object.popupSpanErrorActive;
    this._popupButton = object.popupButton;
    this._popupButtonInactive = object.popupButtonInactive;
    this._formInputList = Array.from(this._form.querySelectorAll(this._formInput));
    this._buttonElement = this._form.querySelector(this._popupButton);
  }

  _showInputError(formInput, validationMessage) {
    const errorElement = this._form.querySelector(`.${formInput.id}-error`);
    formInput.classList.add(this._popupInputTypeError);
    errorElement.textContent = validationMessage;
    errorElement.classList.add(this._popupSpanErrorActive);
  }

  _hideInputError(formInput) {
    const errorElement = this._form.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove(this._popupInputTypeError);
    errorElement.textContent = '';
    errorElement.classList.remove(this._popupSpanErrorActive);
  }

  _isValid(formInput, validationConfig) {
      if (!formInput.validity.valid) {
        this._showInputError(formInput, formInput.validationMessage, validationConfig);
    } else {
        this._hideInputError(formInput, validationConfig);
    }
  }

  _switchButton(formInputList) {
    if (this._inputInvalid(formInputList)) {
      this._buttonElement.setAttribute('disabled', true);
      this._buttonElement.classList.add(this._popupButtonInactive);
    } else {
      this._buttonElement.removeAttribute('disabled', false);
      this._buttonElement.classList.remove(this._popupButtonInactive);
    }
  }

  _setEventListeners(validationConfig) {
    this._switchButton();
    this._formInputList.forEach((formInput) => {
      formInput.addEventListener('input', () => {
        this._isValid(formInput, validationConfig);
        this._switchButton(validationConfig);
      });
    });
  }

  _inputInvalid() {
    return this._formInputList.some((formInput) => {
      return !formInput.validity.valid;
    });
  }

  enableValidation(validationConfig) {
    this._setEventListeners(validationConfig);
  }

  disableSubmitButton (popupButtonSubmit) {
    popupButtonSubmit.disabled = true;
    popupButtonSubmit.classList.add('popup__button_inactive');
  };
  
  activeSubmitButton (popupButtonSubmit) {
    popupButtonSubmit.disabled = false;
    popupButtonSubmit.classList.remove('popup__button_inactive');
  };
}



export default FormValidator