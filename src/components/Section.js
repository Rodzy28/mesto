export default class Section {
  constructor({ items, renderer }, containerCardSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerCardSelector;
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderDefaultCards() {
    this._items.forEach((item) => {
      this._container.append(this._renderer(item));
    });
  }
}
