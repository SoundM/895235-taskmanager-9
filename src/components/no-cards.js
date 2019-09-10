import {AbstractComponent} from './absctract-component.js';

export class NoCards extends AbstractComponent {

  getTemplate() {
    return `<section class="board container">
        <p class="board__no-tasks">
          Congratulations, all tasks were completed! To create a new click on
          «add new task» button.
        </p>
      </section>`;
  }
}
