import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor({popupSelector}) {
        super(popupSelector);
        //this._form = this._popup.querySelector('.popup__form_confrim')
        this._confirmButton = this._popup.querySelector('.popup__button_confirm')     
    }

    setEventListeners() {
        super.setEventListeners();

        this._confirmButton.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        });
    }
    
    handleSubmit(handle) {
        this._handleSubmit = handle;
    }

    
} 