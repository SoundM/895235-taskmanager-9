import {createElement, unRender} from './utils';

export class BoardFilter {
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
    return `<div class="board__filter-list">
                <a href="#" class="board__filter">SORT BY DEFAULT</a>
                <a href="#" class="board__filter">SORT BY DATE up</a>
                <a href="#" class="board__filter">SORT BY DATE down</a>
              </div>`;
  }
}
