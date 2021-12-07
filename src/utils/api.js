class Api {
  constructor(props) {
    this.baseUrl = props.baseUrl;
    this.headers = props.headers;
  }

  _checkErrors(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getInitialProfile() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    }).then((res) => this._checkErrors(res));
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    }).then((res) => this._checkErrors(res));
  }

  // fetchCard({ name, link }) {
  //   return fetch(`${this.baseUrl}/cards`, {
  //     method: "POST",
  //     headers: this.headers,
  //     body: JSON.stringify({ name, link }),
  //   }).then((res) => this._checkErrors(res));
  // }

  // fetchProfileInfo({ name, about }) {
  //   return fetch(`${this.baseUrl}/users/me`, {
  //     method: "PATCH",
  //     headers: this.headers,
  //     body: JSON.stringify({ name: name, about: about }),
  //   }).then((res) => this._checkErrors(res));
  // }

  // changeProfileAvatar({ avatar }) {
  //   return fetch(`${this.baseUrl}/users/me/avatar`, {
  //     method: "PATCH",
  //     headers: this.headers,
  //     body: JSON.stringify({ avatar: avatar }),
  //   }).then((res) => this._checkErrors(res));
  // }

  // deleteCard(cardId) {
  //   return fetch(`${this.baseUrl}/cards/${cardId}`, {
  //     method: "DELETE",
  //     headers: this.headers,
  //   }).then((res) => this._checkErrors(res));
  // }

  // likeCard(cardId) {
  //   return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
  //     method: "PUT",
  //     headers: this.headers,
  //   }).then((res) => this._checkErrors(res));
  // }

  // removeLike(cardId) {
  //   return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
  //     method: "DELETE",
  //     headers: this.headers,
  //   }).then((res) => this._checkErrors(res));
  // }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-13",
  headers: {
    authorization: "0f98077f-1b08-4829-ae57-6f81ab47380c",
    "Content-Type": "application/json",
  },
});

export default api;
