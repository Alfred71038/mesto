import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import { popupOpenButtonElement, profileFormElement, profileName, 
  profileAboutMe, popupName, popupAboutMe, 
  popupAddButtonElement, cardFormElement} 
from '../utils/constants.js';

import {initialCards} from '../utils/initialCards.js';
import {validationList} from '../utils/validationList.js';


/**************************************************************************************** */

function handleCardClick(name, link) {
  popupZoomWithImage.open(name, link)
}

const createCard = (data) => {
  return new Card (data, '#elements-item-template', handleCardClick)
  .generateCard();
}

const renderCard = (element) => {
  const card = createCard(element);
  itemsCard.addItem(card);
}

const itemsCard = new Section({
  items:initialCards,
  renderer:renderCard
}, '.cards');

itemsCard.renderItems();

/***************************************************************************************** */

const userInfo = new UserInfo({nameSelector: '.profile__name', aboutMeSelector: '.profile__about-me'});

function userPopupProfile() {
  const user = userInfo.getUserInfo()
  popupName.value = user.name;
  popupAboutMe.value = user.about;

  openPopupProfile.open();  
}

function userPopupCard(item) {
openPopupCard.open(item);
formValidationCard.switchButton()
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