import { nameInput, jobInput } from '../utils/constants.js';

export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this._name = profileName;
    this._job = profileJob;
  }

  getUserInfo() {
    nameInput.value = this._name.textContent;
    jobInput.value = this._job.textContent;
  }

  setUserInfo({ name, job }) {
    this._name.textContent = name;
    this._job.textContent = job;
  }

}
