const validationList = ({
    popupForm: '.popup__form',
    formInput: '.popup__input',
    popupInputTypeError: 'popup__form_input_type_error',
    popupSpanErrorActive: 'popup__form_input-error-active',
    popupButton: '.popup__button',
    popupButtonInactive: 'popup__button_inactive'
});

const showInputError = (popupForm, formInput, errorMessage, validationConfig) => {
    const errorElement = popupForm.querySelector(`.${formInput.id}-error`);
    formInput.classList.add(validationConfig.popupInputTypeError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.popupSpanErrorActive);
  };
  const hideInputError = (popupForm, formInput, validationConfig) => {
    const errorElement = popupForm.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove(validationConfig.popupInputTypeError);
    errorElement.textContent = '';
    errorElement.classList.remove(validationConfig.popupSpanErrorActive);
  };
  
  const isValid = (popupForm, formInput, validationConfig) => {
    if (!formInput.validity.valid) {
      showInputError(popupForm, formInput, formInput.validationMessage, validationConfig);
    } else {
      hideInputError(popupForm, formInput, validationConfig);
    }
  };
  
  const switchButton = (formInputList, buttonElement, validationConfig) => {
    if (inputInvalid(formInputList)) {
      buttonElement.classList.add(validationConfig.popupButtonInactive);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(validationConfig.popupButtonInactive);
      buttonElement.removeAttribute('disabled', false);
    };
  };

  const setEventListeners = (popupForm, validationConfig) => {
    const formInputList = Array.from(popupForm.querySelectorAll(validationConfig.formInput));
    const buttonElement = popupForm.querySelector(validationConfig.popupButton);
    switchButton(formInputList, buttonElement, validationConfig);
    formInputList.forEach((formInput) => {
      formInput.addEventListener('input', () => {
          isValid(popupForm, formInput, validationConfig);
          switchButton(formInputList, buttonElement, validationConfig);
      });
    });
  };

  const inputInvalid = (formInputList) => {
    return formInputList.some((formInput) => {
      return !formInput.validity.valid;
    })
  };
  const enableValidation = (validationConfig) => {
    const formElementList = Array.from(document.querySelectorAll(validationConfig.popupForm));
    formElementList.forEach((popupForm) => {
        popupForm.addEventListener('submit', (evt) => {
          evt.preventDefault();
      });
        setEventListeners(popupForm, validationConfig)
    });
  };

 /*const resetForm = () => {
    switchButton();
    FormInputList.forEach((FormInput) => {
      hideInputError(FormInput);
    });
  };*/


  enableValidation(validationList);