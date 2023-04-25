import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        //this._form = this._popup.querySelector('.popup__form');
        //this._popupInputLIst = Array.from(this._form.querySelectorAll('.popup__input'));
        this._handleFormSubmit = handleFormSubmit;

    }

    _submitInputPopup() {
        const popupInputLIst = this._popup.querySelector('.popup__form');
        const inputValue = {};
        for (let i = 0; i < popupInputLIst.length; i++) {
            const input = popupInputLIst.input(i);
            inputValue[input.name] = input.value;  
        }

        return inputValue;
    }

    close() {
        super.close();
        this._popup.querySelector('.popup__form').reset();
    }

    setEventListeners() {
        this._data = this._submitInputPopup;
        this._popup.querySelector('.popup__form').addEventListener('submit', (evt) => {
            this._handleFormSubmit(evt, this._data());
        })
        super.setEventListeners();
    }
}
