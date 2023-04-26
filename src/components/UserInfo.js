export default class UserInfo {
    constructor({nameSelector, aboutMeSelector}) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutMeSelector);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent,
        };
    }

    setUserInfo(name, about) {
        this._name.textContent = name;
        this._about.textContent = about;
    }
}