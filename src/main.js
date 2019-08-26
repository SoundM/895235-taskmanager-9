import {createTemplateMenu} from './components/menu.js';
import {createTemplateSearch} from './components/search.js';
import {createTemplateFilter} from './components/filter.js';
import {createTemplateBoardFilter} from './components/board.js';
import {createTemplateBoardContainer} from './components/board-container.js';
import {createTemplateCardEdit} from './components/card-edit.js';
import {createTemplateCard} from './components/card.js';
import {createTemplateButton} from './components/button.js';
import {getCard} from './data/data-card.js';
import {getFilters} from './data/data-filter.js';

const CardsCount = {
  CARDS_ACTIVE: 5,
  ADD_BY_CLICK: 8,
  All: 23,
};

let cardBalance = CardsCount.All - CardsCount.CARDS_ACTIVE;
const containerForMain = `.main`;
const containerForMenu = `.main__control`;
const board = `.board`;
const boardContainer = `.board__tasks`;
const tasks = new Array(CardsCount.All).fill(``).map(getCard);

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

  {
    container: boardContainer,
    template: createTemplateCardEdit,
    place: `beforeEnd`,
    amount: 1,
  },
];

const renderAllComponents = () => {
  elements.forEach((it) => {
    const currentContainer = document.querySelector(it.container);
    for (let i = 0; i < it.amount; i++) {
      currentContainer.insertAdjacentHTML(it.place, it.template(getFilters(tasks)));
    }
  });
};
renderAllComponents();

const card = {
  container: boardContainer,
  template: createTemplateCard,
  place: `beforeEnd`,
  task: getCard,
};

const renderCards = (amount) => {
  const currentContainer = document.querySelector(card.container);
  for (let i = 0; i < amount; i++) {
    currentContainer.insertAdjacentHTML(card.place, card.template(card.task()));
  }
};

renderCards(CardsCount.CARDS_ACTIVE);

const buttonLoadMore = document.querySelector(`.load-more`);


buttonLoadMore.addEventListener(`click`, () => {
  if (cardBalance > CardsCount.ADD_BY_CLICK) {
    cardBalance -= CardsCount.ADD_BY_CLICK;
    return renderCards(CardsCount.ADD_BY_CLICK);
  }
  buttonLoadMore.style.display = `none`;
  return renderCards(cardBalance);
});
