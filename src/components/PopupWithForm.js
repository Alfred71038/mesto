import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupInputLIst = this._popup.querySelectorAll('.popup__input');
        this._form = this._popup.querySelector('.popup__form')
    }

    _submitInputPopup() {
        const inputValue = {};
        this._popupInputLIst.forEach((input) => {
            inputValue[input.name] = input.value; 
            
        });
        return inputValue;
    }

    setEventListeners() {
        
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._submitInputPopup());
            this.close();
        })
        super.setEventListeners();
    }
    
    close() {
        super.close();
        this._form.reset();
    }
}
