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

const savePopup = function (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileAboutMe.textContent = popupAboutMe.value;
    closePopup();
}

popupElement.addEventListener('submit', savePopup); 

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


const elements = document.querySelector('.elements');
const reactionElement = elements.querySelector('.element__place-reaction');

const like = function() {
    reactionElement.classList.toggle('element__place-reaction_active');
}


const dislike = function() {
    reactionElement.classList.remove('element__place-reaction_active');
}

reactionElement.addEventListener('click', like);