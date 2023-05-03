export default class Card {
  constructor(data, template, handleCardClick, handleLikeCard, handleDislikeCard, handleCardDelete, userId) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
    this._handleCardClick = handleCardClick;

    //Обновление
    this._likes = data.likes;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._handleLikeCard = handleLikeCard;
    this._handleDislikeCard = handleDislikeCard;
    this._handleCardDelete = handleCardDelete;
    
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._template)
    .content
    .querySelector('.element')
    .cloneNode(true);

    this._elementImage = cardElement.querySelector('.element__image');
    this._buttonLike = cardElement.querySelector('.element__place-reaction');
    this._buttonDelete = cardElement.querySelector('.element__delete-button');
    this._countLike = cardElement.querySelector('.element__place-count');

    if (
      this._likes.filter((like) => like._id === this._userId).length > 0
    ) {
      this._buttonLike.classList.add("element__place-reaction_active");
    }

    return cardElement;
  }

  countLike(data) {    
    
    this._countLike.textContent = data.likes.length;
  }
  
  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();
    this._isOwner();

    this._element.querySelector('.element__place-name').textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._countLike.textContent = this._likes.length;

    return this._element;
    }

  _setEventListeners() {

    //лайк
    this._buttonLike.addEventListener("click", () => {
      if (this._buttonLike.classList.contains('element__place-reaction_active')) {
        this._handleDislikeCard(this);
      
      } else {
        this._handleLikeCard(this);
      }
    });
    
    this._buttonDelete.addEventListener('click', () => {
      this._handleCardDelete(this); 
    })

    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link); 
    });
  }

    reactionButton() {
      this._buttonLike
      .classList
      .toggle('element__place-reaction_active');
    }
  
    deleteCard() {
      this._element.remove();
      this._element = null
    }
    
    

    _isOwner() {
      if (this._userId !== this._ownerId) {
        this._buttonDelete.remove();
      }
    }
  }
  
  


