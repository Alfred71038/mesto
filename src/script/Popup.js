export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }


    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closePopupByEsc);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closePopupByEsc);
    }
    
    _closePopupByEsc = (evt) => {
            if (evt.key === 'Escape') {
                this.close();
            }
        }
        
    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if (evt.currentTarget === evt.target) {
                this.close();

            } if (evt.target.classList.contains('popup__button-image')) {
                this.close();
            };
        });
    }

    
}   
