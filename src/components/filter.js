export const createTemplateFilter = ({title, count}) =>
  `<section class="main__filter filter container">
    ${Array.from(title).map((name) => `<input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      checked
    />
    <label for="filter__${name}" class="filter__label">${name.toUpperCase()} <span class="filter__all-count">${name === `all` ? count() : 0}</span></label>`).join(``)}
  </section>`;
