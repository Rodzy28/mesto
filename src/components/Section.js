export default class Section {
  constructor({ renderer }, containerCardSelector) {
    this._renderer = renderer;
    this._container = containerCardSelector;
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderCardsFromServer(data) {
    data.forEach((item) => {
      this._container.append(this._renderer(item));
    });
  }
}
