//Поп_апы
const profilePopup = document.querySelector('#profile');
const cardPopup = document.querySelector('#card');
const imagePopup = document.querySelector('#image');

const popupCloseButtonList = document.querySelectorAll('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const profileFormElement = document.querySelector('#profile-form');
const profileFormInput = document.querySelectorAll('.popup__input')
const popupInputTypeError = document.querySelector ('popup__form_input_type_error')
const popupSpanErrorActive = document.querySelector ('popup__form_input-error-active')
const profileElement = document.querySelector('.profile');
const profileName = profileElement.querySelector('.profile__name');
const profileAboutMe = profileElement.querySelector('.profile__about-me');
const popupName = profilePopup.querySelector('.popup__input_type_name');
const popupAboutMe = profilePopup.querySelector('.popup__input_type_about-me');


//Открытие поп_апа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      popup.classList.remove('popup_opened');
    }
  });
  popup.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget) {
            closePopup(popup);
    };
});
};

//Закрытие поп_апа
const closePopup = (popup) => {
  popup
  .classList
  .remove('popup_opened');
}

/*function resetFormValidation(popup) {
  if (profilePopup.classList.contains('popup_opened') || cardPopup.classList.contains('popup_opened')) {
    
    const profileFormInput = Array.from(document.querySelectorAll('.popup__input'));
    const profileInputError = Array.from(document.querySelectorAll('.popup__input-error'));

    profileFormInput.forEach((input) => {
      input.classList.remove('popup__form_input_type_error');
    });

    profileInputError.forEach((error) => {
      error.textContent = '';
    });
  };
};*/

//Открытие поп_апа с профилем
const openPopupProfile = () => {
  popupName.value = profileName.textContent;
  popupAboutMe.value = profileAboutMe.textContent;
  openPopup(profilePopup);  
}
popupOpenButtonElement.addEventListener('click', openPopupProfile);

//Закрытие поп_апа с профилем

popupCloseButtonList.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//сохранение изменений 
function profileEditPopup (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileAboutMe.textContent = popupAboutMe.value;
  closePopup(profilePopup);
}

profileFormElement.addEventListener('submit', profileEditPopup); 

//////////////////////////////////////////////////////////////////////////////////////////////////
const popupAddButtonElement = document.querySelector('.profile__add-button');
const cardFormElement = document.querySelector('#card-form');
const cardsContainer = document.querySelector('.cards');
const template = document.querySelector('#elements-item-template');
const popupZoomImage = document.querySelector('.popup_zoom-image');
const popupImage = popupZoomImage.querySelector('.popup__image');
const popupSignature = popupZoomImage.querySelector('.popup__signature');

const popupCardTitle = cardPopup.querySelector('.popup__input_card-type-title');
const popupCardLink = cardPopup.querySelector('.popup__input_card-type-link');

//сейв для попапа с картинками

const openCardPopup = () => {
    popupCardTitle.value = '';
    popupCardLink.value = '';
    openPopup(cardPopup);
}

const closeCardPopup = () => {
    closePopup(cardPopup);
}

popupAddButtonElement.addEventListener('click', openCardPopup);

cardFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const addNewCard = {
    name: popupCardTitle.value,
    link: popupCardLink.value
  };
  renderCardsElement(addNewCard);
  closeCardPopup();
  evt.target.reset();
});

 
function createCard (addNewCard)  {
  const cardsElement = template
  .content
  .querySelector('.element')
  .cloneNode(true);
  const imageElement = cardsElement
  .querySelector('.element__image');
  imageElement.alt = addNewCard.name;
  imageElement.src = addNewCard.link;
  cardsElement.querySelector('.element__place-name')
  .textContent = addNewCard.name;
  cardsElement.querySelector('.element__place-reaction').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__place-reaction_active');
  });
  
  cardsElement.querySelector('.element__delete-button').addEventListener('click', (evt) => {
    evt.currentTarget.closest('.element').remove();
  });

  imageElement.addEventListener('click', () => {
    popupImage.alt = addNewCard.name;
    popupImage.src = addNewCard.link;
    popupSignature.textContent = addNewCard.name;
    openImagePopup()
    });

  return cardsElement;
}

const openImagePopup = () => {
  openPopup(imagePopup);
}

initialCards.forEach((addNewCard) => {
  createCard(addNewCard);
});

const renderCardsElement = (addNewCard) => {
  cardsContainer.prepend(createCard(addNewCard));
}

initialCards.forEach((addNewCard) => {
  renderCardsElement(addNewCard);
});

