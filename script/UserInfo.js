export default class UserInfo {
    constructor({aboutMeSelector, nameSelector}) {
        this._aboutMe = aboutMeSelector;
        this._name = nameSelector;
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._aboutMe.textContent
        };
    }

    setUserInfo(name, about) {
        this._name.textContent = name;
        this._aboutMe.textContent = about; 
    }
}