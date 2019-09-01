import {createElement, unRender} from './utils';

export class Button {
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate().trim());
    }

    return this._element;
  }

  removeElement(element) {
    this._element = null;
    unRender(element);
  }

  getTemplate() {
    return `<button class="load-more" type="button">load more</button>`;
  }
}
