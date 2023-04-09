export default class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._name = nameSelector;
    this._about = aboutSelector;
  }

  getUserInfo() {
    return {name: this._name.textContent, job: this._about.textContent};
   }

  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._about.textContent = userData.about;
  }
}
