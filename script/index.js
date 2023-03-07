const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupSaveButtonElement = popupElement.querySelector('.popup__save-button');

const profileElement = document.querySelector('.profile');
let profileName = profileElement.querySelector('.profile__name');
let profileAboutMe = profileElement.querySelector('.profile__about-me');
let popupName = popupElement.querySelector('.popup__input_type_name');
let popupAboutMe = popupElement.querySelector('.popup__input_type_about-me');
let popupContainer = popupElement.querySelector('.popup__container')

//сохранение изменений 
const savePopup = function (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileAboutMe.textContent = popupAboutMe.value;
    closePopup();
}

popupElement.addEventListener('submit', savePopup); 

// Открытие попапа с профилем
const openPopup = function() {
    popupElement.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupAboutMe.value = profileAboutMe.textContent;
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

// Открытие попапа с картинками

const popupPhotoElement = document.querySelector('.popup__photo');
const popupPhotoCloseButtonElement = popupPhotoElement.querySelector('.popup__photo-close-button');
const popupAddButtonElement = document.querySelector('.profile__add-button');
const popupPhotoContent = popupPhotoElement.querySelector('.popup_photo-content')
const cards = document.querySelector('.cards');

let popupPhotoName = popupPhotoElement.querySelector('.popup__photo_input_type_name');
let popupPhotoCardsLink = popupPhotoElement.querySelector('.popup__photo_input_type_cards_link');



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

//сейв для попапа с картинками

const openPopupPhoto = () => {
    popupPhotoElement.classList.add('popup_opened');
    
}

const closePopupPhoto = () => {
  popupPhotoElement.classList.remove('popup_opened');
}

popupAddButtonElement.addEventListener('click', openPopupPhoto);
popupPhotoCloseButtonElement.addEventListener('click', closePopupPhoto);

 
function createCard (item)  {
  const template = document.querySelector('#elements-item-template').content;
  const cardsElement = template.querySelector('.element').cloneNode(true);
  const imageElement = cardsElement.querySelector('.element__image');
  imageElement.alt = item.name;
  imageElement.src = item.link;
  cardsElement.querySelector('.element__place-name')
  .textContent = item.name;
  cardsElement.querySelector('.element__place-reaction').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__place-reaction_active');
  });
  
  cardsElement.querySelector('.element__delete-button').addEventListener('click', (evt) => {
    evt.currentTarget.closest('.element').remove();
  });

  cards.append(cardsElement);
}

  initialCards.forEach((item) => {
    createCard(item);
  });
