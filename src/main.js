import {Menu} from './components/menu.js';
import {Search} from './components/search.js';
import {Filters} from './components/filter.js';
import {BoardContainer} from './components/board-container.js';
import {render} from './components/utils.js';
import {getCard, CardsCount} from './data/data-card.js';
import {getFilters} from './data/data-filter.js';
import {BoardController} from './controllers/board';

const containerForMain = `.main`;
const containerForMenu = `.main__control`;
const cards = new Array(CardsCount.All).fill(``).map(getCard);

const elements = [
  {
    container: containerForMenu,
    element: new Menu(),
    place: `beforeEnd`,
  },

  {
    container: containerForMain,
    element: new Search(),
    place: `beforeEnd`,
  },

  {
    container: containerForMain,
    element: new Filters(getFilters(cards)),
    place: `beforeEnd`,
  },

  {
    container: containerForMain,
    element: new BoardContainer(),
    place: `beforeEnd`,
  },
];

const renderAllComponents = () => {
  elements.forEach((it) => {
    const currentContainer = document.querySelector(it.container);
    render(currentContainer, it.element.getElement(), it.place);
  });
};
renderAllComponents();

const board = document.querySelector(`.board`);
const boardController = new BoardController(board, cards);
boardController.init();

