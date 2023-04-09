export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _handlerServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handlerServerResponse);
  }

  getUserInfo() {
    return fetch('https://nomoreparties.co/v1/cohort-63/users/me', {
      method: 'GET',
      headers: this._headers,
    }).then(this._handlerServerResponse);
  }

  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    }).then(this._handlerServerResponse);
  }

  postNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(this._handlerServerResponse);
  }

  addLike(id) {
    return fetch(`${this._url}/cards/${id}/likes `, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._handlerServerResponse);
  }

  deleteLike(_id) {
    return fetch(`${this._url}/cards/${_id}/likes `, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._handlerServerResponse);
  }

}


