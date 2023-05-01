export default class UserInfo {
    constructor({nameSelector, aboutMeSelector, avatarSelector}) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutMeSelector);
        this._avatar = document.querySelector(avatarSelector)
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent,
        };
    }

    setUserInfo({name, about, avatar, id}) {
        this._name.textContent = name;
        this._about.textContent = about;
        this._avatar.src = avatar;
        this._userId = id;
    }
}