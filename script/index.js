import Card from './Card.js';
import FormValidator from './FormValidator.js'
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

import { popupOpenButtonElement, profileFormElement, profileName, 
  profileAboutMe, popupName, popupAboutMe, 
  popupAddButtonElement, cardFormElement, cardsContainer } 
from '../utils/constants.js';

import {initialCards} from '../utils/initialCards.js';
import {validationList} from '../utils/validationList.js';


/**************************************************************************************** */

function handleCardClick(name, link) {
  popupZoomWithImage.open(name, link)
}

const createCard = (data, template, handleCardClick) => {
  return new Card(data, template, handleCardClick)
  .generateCard();
}

const renderCard = (element) => {
  const card = createCard(element, '#elements-item-template', handleCardClick);
  itemsCard.addItem(card);
}

const itemsCard = new Section({
  items:initialCards,
  renderer:renderCard
}, cardsContainer);

itemsCard.renderItems();

/***************************************************************************************** */

const userInfo = new UserInfo({nameSelector: profileName, aboutMeSelector: profileAboutMe});

function userPopupProfile() {
  const user = userInfo.getUserInfo()
  popupName.value = user.name;
  popupAboutMe.value = user.about;

  openPopupProfile.open();  
}

function userPopupCard(item) {
openPopupCard.open(item);
}

function handleFormSubmitProfile({name, about}) {
  userInfo.setUserInfo(name, about);
}

function handleFormSubmitCard(item) {
  renderCard(item);
}

popupOpenButtonElement.addEventListener('click', userPopupProfile);
popupAddButtonElement.addEventListener('click', userPopupCard);

/**************************************************************************************** */

const formValidationProfile = new FormValidator(validationList, profileFormElement); 
formValidationProfile.enableValidation() 
 
const formValidationCard = new FormValidator(validationList, cardFormElement); 
formValidationCard.enableValidation() 
 
const  popupZoomWithImage = new PopupWithImage('.popup_zoom-image');
popupZoomWithImage.setEventListeners();

const openPopupProfile = new PopupWithForm ('.popup_profile', handleFormSubmitProfile);
openPopupProfile.setEventListeners();

const openPopupCard = new PopupWithForm ('.popup_card', handleFormSubmitCard);
openPopupCard.setEventListeners();