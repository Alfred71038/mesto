export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addCards(items) {
        items.forEach((item) => {
            this.renderItem(item)
        });
    }

    renderItem(item) {
        this._container.append(this._renderer(item));
      }

    addItem(element) {
        this._container.prepend(element);
    }
}