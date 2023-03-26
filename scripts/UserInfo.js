export default class UserInfo {
  constructor({profileName, profileJob}) {
    this._name = profileName;
    this._job = profileJob;
  }

  getUserInfo() {
      document.querySelector('.popup__input_type_name').value = this._name.textContent;
      document.querySelector('.popup__input_type_job').value = this._job.textContent;
  }

  setUserInfo({name, job}) {
    this._name.textContent = name;
    this._job.textContent = job;
  }

}
