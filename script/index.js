const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupSaveButtonElement = popupElement.querySelector('.popup__save-button');

// Редактирование профиля

const profileElement = document.querySelector('.profile');
let profileName = profileElement.querySelector('.profile__name');
let profileAboutMe = profileElement.querySelector('.profile__about-me');
let popupName = popupElement.querySelector('.popup__input_type_name');
let popupAboutMe = popupElement.querySelector('.popup__input_type_about-me');
let popupContainer = popupElement.querySelector('.popup__container')

const savePopup = function (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileAboutMe.textContent = popupAboutMe.value;
    closePopup();
}

popupElement.addEventListener('submit', savePopup); 

// Открытие и закрытие Popup 
const openPopup = function() {
    popupElement.classList.add('popup_opened');
    console.log('Open popup clicked');
    popupName.value = profileName.textContent;
    popupAboutMe.value = profileAboutMe.textContent;
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened');
    console.log('Close popup clicked');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);



//  LIke
const elements = document.querySelector('.elements');
const reactionElement = elements.querySelector('.element__place-reaction');

const like = function() {
    reactionElement.classList.toggle('element__place-reaction_active');
    console.log('Like');
}


const dislike = function() {
    reactionElement.classList.remove('element__place-reaction_active');
    console.log('dislike');
}

reactionElement.addEventListener('click', like);