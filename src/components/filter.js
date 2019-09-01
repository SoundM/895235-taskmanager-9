import {createElement} from './utils';

export class Filters {
  constructor(filters) {
    this._filters = filters;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<section class="main__filter filter container">
    ${this._filters.map((filter) => `
      <input
        type="radio"
        id="filter__${filter.title.toLowerCase()}"
        class="filter__input visually-hidden"
        name="filter"
        checked
      />
      <label for="filter__${filter.title.toLowerCase()}" class="filter__label">
      ${filter.title} <span class="filter__${filter.title.toLowerCase()}-count">${filter.count}</span></label>
    `).join(``)}
    </section>`;
  }
}
