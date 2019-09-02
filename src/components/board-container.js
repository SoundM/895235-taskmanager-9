import {createElement, unRender} from './utils';

export class BoardContainer {
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
    return `<section class="board container">
              <div class="board__tasks">
              </div>
            </section>`;
  }
}
