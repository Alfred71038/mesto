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
  document.addEventListener('keydown', escapeClick = (evt) => {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  });
  popup.addEventListener('click', mouseClick = (evt) => {
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
  popup.removeEventListener('click', escapeClick, mouseClick);
}

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
function submitEditProfilePopup (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileAboutMe.textContent = popupAboutMe.value;
  closePopup(profilePopup);
}

profileFormElement.addEventListener('submit', submitEditProfilePopup); 

//////////////////////////////////////////////////////////////////////////////////////////////////
const popupAddButtonElement = document.querySelector('.profile__add-button');
const cardFormElement = document.querySelector('#card-form');
const cardsContainer = document.querySelector('.cards');
const template = document.querySelector('#elements-item-template');
const popupZoomImage = document.querySelector('.popup_zoom-image');
const popupButtonCardCreate = document.querySelector('.popup__button_card_create')
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
  popupButtonCardCreate.setAttribute('disabled', true);
  popupButtonCardCreate.classList.add('popup__button_inactive')
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

