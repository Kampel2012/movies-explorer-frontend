export class Api {
  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  async _request(url, options) {
    const res = await fetch(url, options);
    return this._checkResponse(res);
  }
}
