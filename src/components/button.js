import {AbstractComponent} from './absctract-component.js';

export class Button extends AbstractComponent {

  getTemplate() {
    return `<button class="load-more" type="button">load more</button>`;
  }
}
