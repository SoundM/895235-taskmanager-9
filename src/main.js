import {createTemplateMenu} from './components/menu.js';
import {createTemplateSearch} from './components/search.js';
import {createTemplateFilter} from './components/filter.js';
import {createTemplateBoardContainer, createTemplateBoardFilter} from './components/board.js';
import {createTaskCard} from './components/card.js';
import {createTemplateButton} from './components/button.js';

const CARD_COUNT = 3;
const containerForMain = `.main`;
const containerForMenu = `.main__control`;
const board = `.board`;
const boardContainer = `.board__tasks`;

const elements = [
  {
    container: containerForMenu,
    template: createTemplateMenu,
    place: `beforeEnd`,
    amount: 1
  },

  {
    container: containerForMain,
    template: createTemplateSearch,
    place: `beforeEnd`,
    amount: 1
  },

  {
    container: containerForMain,
    template: createTemplateFilter,
    place: `beforeEnd`,
    amount: 1
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
    amount: 1
  },

  {
    container: board,
    template: createTemplateButton,
    place: `beforeEnd`,
    amount: 1
  },

  {
    container: boardContainer,
    template: createTaskCard,
    place: `beforeEnd`,
    amount: CARD_COUNT
  }
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
