//Поп_апы
const profilePopup = document.querySelector('#profile');
const cardPopup = document.querySelector('#card');
const imagePopup = document.querySelector('#image');

const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelectorAll('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupSaveButtonElement = profilePopup.querySelector('.popup__save-button');
const contentPopup = document.querySelector('.popup__content');
const profileContentElement = document.querySelector('#profile-content');
const profileElement = document.querySelector('.profile');
const profileName = profileElement.querySelector('.profile__name');
const profileAboutMe = profileElement.querySelector('.profile__about-me');
const popupName = profilePopup.querySelector('.popup__input_type_name');
const popupAboutMe = profilePopup.querySelector('.popup__input_type_about-me');
const popupContainer = profilePopup.querySelector('.popup__container');


//Открытие поп_апа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}


//Закрытие поп_апа
const closePopup = (popup) => {
  popup
  .classList
  .remove('popup_opened');
}

//Открытие поп_апа с профилем
const openPopupProfile = () => {
  popupName.value = profileName.textContent;
  popupAboutMe.value = profileAboutMe.textContent;
  openPopup(profilePopup);
}

popupOpenButtonElement.addEventListener('click', openPopupProfile);

//Закрытие поп_апа с профилем

popupCloseButton.forEach((button) => {
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

profileContentElement.addEventListener('submit', profileEditPopup); 

//////////////////////////////////////////////////////////////////////////////////////////////////
const popupAddButtonElement = document.querySelector('.profile__add-button');
const cardContentElement = document.querySelector('#card-content');
const cardsContainer = document.querySelector('.cards');
const template = document.querySelector('#elements-item-template');
const popupZoomImage = document.querySelector('.popup_zoom-image');
const popupImage = popupZoomImage.querySelector('.popup__image');
const popupSignature = popupZoomImage.querySelector('.popup__signature');

const popupCardName = cardPopup.querySelector('.popup__input_card-type-name');
const popupCardLink = cardPopup.querySelector('.popup__input_card-type-link');

//сейв для попапа с картинками

const openCardPopup = () => {
    openPopup(cardPopup);
}

const closeCardPopup = () => {
    closePopup(cardPopup);
}

popupAddButtonElement.addEventListener('click', openCardPopup);

cardContentElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let addNewCard = {
    name: popupCardName.value,
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



