import {createTemplateMenu} from './components/menu.js';
import {createTemplateSearch} from './components/search.js';
import {createTemplateFilter} from './components/filter.js';
import {createTemplateBoardFilter} from './components/board.js';
import {createTemplateBoardContainer} from './components/board-container.js';
import {createTemplateCard} from './components/card.js';
import {createTemplateButton} from './components/button.js';
import {getTask} from '../src/data.js';

const CARD_COUNT = 5;
const EXTRA_CARD_COUNT = 8;
const containerForMain = `.main`;
const containerForMenu = `.main__control`;
const board = `.board`;
const boardContainer = `.board__tasks`;


const elements = [
  {
    container: containerForMenu,
    template: createTemplateMenu,
    place: `beforeEnd`,
    amount: 1,
  },

  {
    container: containerForMain,
    template: createTemplateSearch,
    place: `beforeEnd`,
    amount: 1,
  },

  {
    container: containerForMain,
    template: createTemplateFilter,
    place: `beforeEnd`,
    amount: 1,
  },

  {
    container: containerForMain,
    template: createTemplateBoardContainer,
    place: `beforeEnd`,
    amount: 1,
  },

  {
    container: board,
    template: createTemplateBoardFilter,
    place: `afterBegin`,
    amount: 1,
  },

  {
    container: board,
    template: createTemplateButton,
    place: `beforeEnd`,
    amount: 1,
  },
];

const renderAllComponents = () => {
  elements.forEach((it) => {
    const currentContainer = document.querySelector(it.container);
    for (let i = 0; i < it.amount; i++) {
      currentContainer.insertAdjacentHTML(it.place, it.template());
    }
  });
};
renderAllComponents();

const card = {
  container: boardContainer,
  template: createTemplateCard,
  place: `beforeEnd`,
  task: getTask,
};

const renderCards = (amount) => {
  const currentContainer = document.querySelector(card.container);
  for (let i = 0; i < amount; i++) {
    currentContainer.insertAdjacentHTML(card.place, card.template(card.task()));
  }
};

renderCards(CARD_COUNT);

const buttonLoadMore = document.querySelector(`.load-more`);

buttonLoadMore.addEventListener(`click`, () => {
  renderCards(EXTRA_CARD_COUNT);
});
