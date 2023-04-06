export default class Section {
  constructor({ data, renderer }, containerCardSelector) {
    this._data = data;
    this._renderer = renderer;
    this._container = containerCardSelector;
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderDefaultCards() {
    this._data.forEach((item) => {
      this._container.append(this._renderer(item));
    });
  }
}
