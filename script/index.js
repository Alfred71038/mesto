const popupElement = document.querySelector('.popup');
const save = document.querySelector('#save');
const photo = document.querySelector('#photo');
const image = document.querySelector('#image');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupSaveButtonElement = popupElement.querySelector('.popup__save-button');

const profileElement = document.querySelector('.profile');
let profileName = profileElement.querySelector('.profile__name');
let profileAboutMe = profileElement.querySelector('.profile__about-me');
let popupName = popupElement.querySelector('.popup__input_type_name');
let popupAboutMe = popupElement.querySelector('.popup__input_type_about-me');
let popupContainer = popupElement.querySelector('.popup__container');

//сохранение изменений 
const savePopup = function (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileAboutMe.textContent = popupAboutMe.value;
    closePopup(save);
}

popupElement.addEventListener('submit', savePopup); 

//Открытие поп_апа
const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
}

const openPopupSave = () => {
    popupName.value = profileName.textContent;
    popupAboutMe.value = profileAboutMe.textContent;
    openPopup(save);
}

popupOpenButtonElement.addEventListener('click', openPopupSave);

//Закрытие поп_апа
const closePopup = (popupElement) => {
  popupElement
  .classList
  .remove('popup_opened');
}

const closePopupSave = () => {
  closePopup(save);
}

popupCloseButtonElement.addEventListener('click', closePopupSave);

// Открытие попапа с картинками

const popupPhotoElement = document.querySelector('.popup_photo');
const popupPhotoCloseButtonElement = popupPhotoElement.querySelector('.popup__photo-close-button');
const popupAddButtonElement = document.querySelector('.profile__add-button');
const popupPhotoContent = popupPhotoElement.querySelector('.popup__photo_content');
const cards = document.querySelector('.cards');
const template = document.querySelector('#elements-item-template');
const popupZoomImage = document.querySelector('.popup_zoom-image');
const popupImage = popupZoomImage.querySelector('.popup__image');
const popupSignature = popupZoomImage.querySelector('.popup__signature');
const popupImageCloseButtonElement = popupZoomImage.querySelector('.popup__image-close-button');

let popupPhotoName = popupPhotoElement.querySelector('.popup__input_photo_type_name');
let popupPhotoCardsLink = popupPhotoElement.querySelector('.popup__input_photo_type_link');



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
    openPopup(photo);
}

const closePopupPhoto = () => {
    closePopup(photo);
}

popupAddButtonElement.addEventListener('click', openPopupPhoto);
popupPhotoCloseButtonElement.addEventListener('click', closePopupPhoto);

popupPhotoContent.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let addNewCard = {
    name: popupPhotoName.value,
    link: popupPhotoCardsLink.value
  };
  renderCardsElement(addNewCard);
  closePopupPhoto();
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
    openPopupImage()
    });

  return cardsElement;
}

const openPopupImage = () => {
  openPopup(image);
}

const closePopupImage = () => {
  closePopup(image);
}

popupImageCloseButtonElement.addEventListener('click', closePopupImage)

initialCards.forEach((addNewCard) => {
  createCard(addNewCard);
});

const renderCardsElement = (addNewCard) => {
  cards.append(createCard(addNewCard));
}

initialCards.forEach((addNewCard) => {
  renderCardsElement(addNewCard);
});



