export const profilePopup = document.querySelector('#profile');
export const cardPopup = document.querySelector('#card');
export const popups = document.querySelectorAll('.popup');

export const popupCloseButtonList = document.querySelectorAll('.popup__close-button');
export const popupOpenButtonElement = document.querySelector('.profile__edit-button');
export const profileFormElement = document.querySelector('#profile-form');
export const profileElement = document.querySelector('.profile');
export const profileName = profileElement.querySelector('.profile__name');
export const profileAboutMe = profileElement.querySelector('.profile__about-me');

export const popupName = profilePopup.querySelector('.popup__input_type_name');
export const popupAboutMe = profilePopup.querySelector('.popup__input_type_about-me');

export const popupAddButtonElement = document.querySelector('.profile__add-button');
export const cardFormElement = document.querySelector('#card-form');
export const cardsContainer = document.querySelector('.cards');

export const popupZoomImage = document.querySelector('.popup_zoom-image');
export const popupButtonCardCreate = document.querySelector('.popup__button_card_create')
export const popupImage = popupZoomImage.querySelector('.popup__image');
export const popupSignature = popupZoomImage.querySelector('.popup__signature');

export const popupCardTitle = cardPopup.querySelector('.popup__input_card-type-title');
export const popupCardLink = cardPopup.querySelector('.popup__input_card-type-link');