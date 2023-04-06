export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  postNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  // getList() {
  //   return fetch('https://mesto.nomoreparties.co/v1/cohort-63/cards', {
  //     headers: {
  //       authorization: 'a12736da-b955-4664-b6d4-b697b2666b6e'
  //     }
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         console.log(res.json());
  //       }
  //     });
  // }

//   getUserInfo() {
//     return fetch('https://nomoreparties.co/v1/cohort-63/users/me', {
//       headers: this._headers,
//     }).then(res => {
//       if (res.ok) {
//         return res.json();
//       }

//       return Promise.reject(`Ошибка: ${res.status}`);
//     });
// }

}


