export default class Card {
  constructor(data, template, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._template)
    .content
    .querySelector('.element')
    .cloneNode(true);

    this._elementImage = cardElement.querySelector('.element__image');
    this._buttonLike = cardElement.querySelector('.element__place-reaction');
    this._buttonDelete = cardElement.querySelector('.element__delete-button')

    return cardElement;
  }

  _setEventListeners() {

    //лайк
    this._buttonLike.addEventListener('click', () => {
      this._reactionButton(); 
    })

    this._buttonDelete.addEventListener('click', () => {
      this._deleteCard(); 
    })

    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link); 
    });
  }

  _reactionButton() {
      this._buttonLike
      .classList
      .toggle('element__place-reaction_active');
    }
  
    _deleteCard() {
      this._element.remove();
      this._element = null
    }
    
    generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector('.element__place-name').textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

    return this._element;
    }
  }
  
  


