export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._name = nameSelector;
    this._about = aboutSelector;
    this._avatar = avatarSelector;
  }

  getUserInfo() {
    return {name: this._name.textContent, job: this._about.textContent};
   }

  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._about.textContent = userData.about;
    this._avatar.style.backgroundImage = `url(${userData.avatar})`;
  }
}
