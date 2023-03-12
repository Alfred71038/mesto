const validationList = ({
    popupForm: '.popup__form',
    FormInput: '.popup__input',
    popupInputTypeError: 'popup__form_input_type_error',
    popupSpanErrorActive: 'popup__form_input-error-active',
    popupButton: '.popup__button',
    popupButtonInactive: 'popup__button_inactive'
});

const showInputError = (popupForm, FormInput, errorMessage, ValidationConfig) => {
    const errorElement = popupForm.querySelector(`.${FormInput.id}-error`);
    FormInput.classList.add(ValidationConfig.popupInputTypeError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(ValidationConfig.popupSpanErrorActive);
  };
  const hideInputError = (popupForm, FormInput, ValidationConfig) => {
    const errorElement = popupForm.querySelector(`.${FormInput.id}-error`);
    FormInput.classList.remove(ValidationConfig.popupInputTypeError);
    errorElement.textContent = '';
    errorElement.classList.remove(ValidationConfig.popupSpanErrorActive);
  };
  
  const isValid = (popupForm, FormInput, ValidationConfig) => {
    if (!FormInput.validity.valid) {
      showInputError(popupForm, FormInput, FormInput.validationMessage, ValidationConfig);
    } else {
      hideInputError(popupForm, FormInput, ValidationConfig);
    }
  };
  
  const switchButton = (FormInputList, Button, ValidationConfig) => {
    if (inputInvalid(FormInputList)) {
      Button.classList.add(ValidationConfig.popupButtonInactive);
    } else {
      Button.classList.remove(ValidationConfig.popupButtonInactive);
    };
  };

  const setEventListeners = (popupForm, ValidationConfig) => {
    const FormInputList = Array.from(popupForm.querySelectorAll(ValidationConfig.FormInput));
    const Button = popupForm.querySelector(ValidationConfig.popupButton);
    switchButton(FormInputList, Button, ValidationConfig);
    FormInputList.forEach((FormInput) => {
        FormInput.addEventListener('input', () => {
          isValid(popupForm, FormInput, ValidationConfig);
          switchButton(FormInputList, Button, ValidationConfig);
      });
    });
  };

  const inputInvalid = (FormInputList) => {
    return FormInputList.some((FormInput) => {
      return !FormInput.validity.valid;
    })
  };
  const enableValidation = (ValidationConfig) => {
    const FormElementList = Array.from(document.querySelectorAll(ValidationConfig.popupForm));
      FormElementList.forEach((popupForm) => {
        popupForm.addEventListener('submit', (evt) => {
          evt.preventDefault();
      });
        setEventListeners(popupForm, ValidationConfig)
    });
  };

 /*const resetForm = () => {
    switchButton();
    FormInputList.forEach((FormInput) => {
      hideInputError(FormInput);
    });
  };*/


  enableValidation(validationList);