import Card from './Card.js';
import FormValidator from './FormValidator.js'


//Поп_апы
const profilePopup = document.querySelector('#profile');
const cardPopup = document.querySelector('#card');
const popups = document.querySelectorAll('.popup');

const popupCloseButtonList = document.querySelectorAll('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const profileFormElement = document.querySelector('#profile-form');
const profileElement = document.querySelector('.profile');
const profileName = profileElement.querySelector('.profile__name');
const profileAboutMe = profileElement.querySelector('.profile__about-me');

const popupName = profilePopup.querySelector('.popup__input_type_name');
const popupAboutMe = profilePopup.querySelector('.popup__input_type_about-me');

const popupAddButtonElement = document.querySelector('.profile__add-button');
const cardFormElement = document.querySelector('#card-form');
const cardsContainer = document.querySelector('.cards');

const popupZoomImage = document.querySelector('.popup_zoom-image');
const popupButtonCardCreate = document.querySelector('.popup__button_card_create')
const popupImage = popupZoomImage.querySelector('.popup__image');
const popupSignature = popupZoomImage.querySelector('.popup__signature');

const popupCardTitle = cardPopup.querySelector('.popup__input_card-type-title');
const popupCardLink = cardPopup.querySelector('.popup__input_card-type-link');





//Открытие поп_апа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc)
};

function closePopupByEsc (evt) {
  if (evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened');
    closePopup(popupOpen);
  }
}

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(popup)
    }
  }
)}) 
  
//Закрытие поп_апа
const closePopup = (popup) => {
  popup
  .classList
  .remove('popup_opened');
  popup.removeEventListener('keydown', closePopupByEsc);
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

//Открытие попапа с карточками
const openCardPopup = () => {
    popupCardTitle.value = '';
    popupCardLink.value = '';
    openPopup(cardPopup);
}

//Закрытие попапа с карточками 
const closeCardPopup = () => {
    closePopup(cardPopup);
}

popupAddButtonElement.addEventListener('click', openCardPopup);

function disableSubmitButton (popupButtonSubmit) {
  popupButtonSubmit.disabled = true;
  popupButtonSubmit.classList.add('popup__button_inactive');
};

function activeSubmitButton (popupButtonSubmit) {
  popupButtonSubmit.disabled = false;
  popupButtonSubmit.classList.remove('popup__button_inactive');
};



//Карточки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];

function createCard (data, template)  {
  const card = new Card(data, template);
  return card.generateCard();
}

initialCards.forEach(data => {
  const template = createCard(data, '#elements-item-template');
  cardsContainer.prepend(template)
});

function addNewCard(name, link) {
  const data = {
    name: name,
    link: link
  };
  const template = createCard(data, '#elements-item-template');
  cardsContainer.prepend(template)
}

cardFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const name = popupCardTitle.value;
  const link = popupCardLink.value
  addNewCard(name, link);
  closeCardPopup();
  cardFormElement.reset();
  disableSubmitButton(popupButtonCardCreate);
});



//Валидация форм 
const validationList = ({
  popupForm: '.popup__form',
  formInput: '.popup__input',
  popupInputTypeError: 'popup__form_input_type_error',
  popupSpanErrorActive: 'popup__form_input-error-active',
  popupButton: '.popup__button',
  popupButtonInactive: 'popup__button_inactive'
});

const formValidationProfile = new FormValidator(validationList, profileFormElement);
formValidationProfile.enableValidation()

const formValidationCard = new FormValidator(validationList, cardFormElement);
formValidationCard.enableValidation()


export {openPopup};

