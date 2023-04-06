import {openPopup} from "./index.js";

class Card {
  constructor(data, template) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
  }

  _getTemplate() {
    this._cardElement = document
    .querySelector(this._template)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return this._cardElement;
  }

  _reactionButton() {
    this._element.querySelector('.element__place-reaction')
    .classList
    .toggle('element__place-reaction_active');
  }

  _deleteCard() {
    this._element.remove();
  }

  _handleImage() {
    const popupZoomImage = document.querySelector('.popup_zoom-image');
    this._popupImage = popupZoomImage.querySelector('.popup__image');
    this._popupSignature = popupZoomImage.querySelector('.popup__signature');
    this._popupImage.alt = this._name;
    this._popupImage.src = this._link;
    this._popupSignature.textContent = this._name;
    openPopup(popupZoomImage)

  }

  _setEventListeners() {
    this._element.querySelector('.element__place-reaction')
    .addEventListener('click', () => {
      this._reactionButton(); 
    })

    this._element.querySelector('.element__delete-button')
    .addEventListener('click', () => {
      this._deleteCard(); 
    })

    this._element.querySelector('.element__image')
    .addEventListener('click', () => {
      this._handleImage(); 
    })
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__place-name').textContent = this._name;
    this._elementImage = this._element.querySelector('.element__image');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

    return this._element;
  }
}

export default Card