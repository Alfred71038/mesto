import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;

    }

    _submitInputPopup() {
        const popupInputLIst = this._popup.querySelectorAll('.popup__input')
        const inputValue = {};
        popupInputLIst.forEach((input) => {
            inputValue[input.name] = input.value; 
            
        });
        return inputValue;
    }

    setEventListeners() {
        
        this._popup.querySelector('.popup__form').addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._submitInputPopup());
            this.close();
        })
        super.setEventListeners();
    }
    
    close() {
        super.close();
        this._popup.querySelector('.popup__form').reset();
    }
}
