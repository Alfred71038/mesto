import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { api } from '../components/Api.js'
import renderLoading from '../utils/renderLoading.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'

import { 
  popupOpenButtonElement, 
  profileFormElement, 
  popupName, 
  popupAboutMe, 
  popupAddButtonElement, 
  cardFormElement, 
  confirmPopup, 
  cardPopup, 
  profilePopup, 
  profileButtonAvatar,
  avatarPopup,
  popupButton
 } 
from '../utils/constants.js';

import {validationList} from '../utils/validationList.js';


/**************************************************************************************** */

let userId;

api.getUserInfo()
.then((res) => {
  console.log(res)
  userId = res._id;
  userInfo.setUserInfo(res) })
  .catch((error) => console.log(error))

api.getInitialCards()
.then((card) => {
  console.log(card)
  itemsCard.renderItems(card)
})
.catch((error) => console.log(error))


/**************************************************************************************** */

const handleLikeCard = (card) => {
  api.addLike(card._cardId)
  .then((res) => {
    card.reactionButton();
    card._countLike.textContent = res.likes.length;
  }).catch((error) => console.log(error))
};

const handleDislikeCard = (card) => {
  api.deleteCard(card._cardId)
  .then((res) => {
    card.reactionButton();
    card._countLike.textContent = res.likes.length;
  }).catch((error) => console.log(error))
};

function handleCardDelete(card) {
  popupConfirm.open();
  popupConfirm.handleSubmit(() => {
  renderLoading(true, popupButton)
  api.deleteCard(card._cardId)
  .then(() => {
    card.deleteCard();
    popupConfirm.close();
  })
  .catch((error) => console.log(error))
  .finally(() => renderLoading(false, popupButton));
  })
}


function handleCardClick(name, link) {
  popupZoomWithImage.open(name, link)
}

/******************************************************************************************** */

const createCard = (data) => {
  return new Card (data, '#elements-item-template', handleCardClick, handleLikeCard, handleDislikeCard, handleCardDelete, userId)
  .generateCard();
}

const renderCard = (element) => {
  const card = createCard(element, '#elements-item-template', handleCardClick, handleLikeCard, handleDislikeCard, handleCardDelete, userId);
  itemsCard.addItem(card);
}

const itemsCard = new Section({
  renderer: renderCard
}, '.cards');


/***************************************************************************************** */

const userInfo = new UserInfo({nameSelector: '.profile__name', aboutMeSelector: '.profile__about-me', avatarSelector: '.profile__avatar'});

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

const openPopupAvatar = new PopupWithForm ('.popup_avatar', handleFromSubmitAvatar);
openPopupAvatar.setEventListeners();

function userPopupAvatar() {
  console.log("клик на аватар")
  console.log(openPopupAvatar)
  openPopupAvatar.open()
}

function handleFormSubmitProfile(title, about) {  
    renderLoading(true, popupButton);
    api.patchUserInfo(title, about).then((res) => { 
    userInfo.setUserInfo(res) })
    .catch((error) => console.log(`Ошибка: ${error}`))
    .finally(() => renderLoading(false, popupButton));
  }

/*function handleFormSubmitCard(item) {
    renderLoading(true, popupButton);
    api.createCard(item).then((res) => {
    renderCard(res);
    cardPopup.close()})
    .catch((error) => console.log(error))
    .finally(() => renderLoading(false, popupButton));
  }*/

function handleFromSubmitAvatar(item) {
    renderLoading(true, popupButton);
    api.patchUserAvatar(item).then((res) => {
    userInfo.setUserInfo(res)})
    .catch((error) => console.log(`Ошибка: ${error}`))
    .finally(() => renderLoading(false, popupButton));
}

popupOpenButtonElement.addEventListener('click', userPopupProfile);
popupAddButtonElement.addEventListener('click', userPopupCard);
profileButtonAvatar.addEventListener('click', userPopupAvatar)

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

const popupConfirm = new PopupWithConfirmation ({popupSelector: '.popup_confirm',});
popupConfirm.setEventListeners();