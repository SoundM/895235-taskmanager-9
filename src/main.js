import {Menu} from './components/menu.js';
import {Search} from './components/search.js';
import {Filters} from './components/filter.js';
import {BoardFilter} from './components/board-filters.js';
import {BoardContainer} from './components/board-container.js';
import {BoardCardsList} from "./components/board-cards-list";
import {render, Position} from './components/utils.js';
import {CardEdit} from './components/card-edit.js';
import {Card} from './components/card.js';
import {Button} from './components/button.js';
import {getCard} from './data/data-card.js';
import {getFilters} from './data/data-filter.js';
import {NoCards} from './components/no-cards.js';

const CardsCount = {
  CARDS_ACTIVE: 5,
  ADD_BY_CLICK: 8,
  All: 23,
};
let cardBalance = CardsCount.All - CardsCount.CARDS_ACTIVE;

const containerForMain = `.main`;
const containerForMenu = `.main__control`;
const board = `.board`;
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

  {
    container: board,
    element: new BoardFilter(),
    place: `afterBegin`,
  },

  {
    container: board,
    element: new BoardCardsList(),
    place: `afterBegin`,
  },

  {
    container: board,
    element: new Button(),
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

const renderCard = (taskMock) => {
  const container = document.querySelector(`.board__tasks`);
  const card = new Card(taskMock);
  const cardEdit = new CardEdit(taskMock);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      container.replaceChild(card.getElement(), cardEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  card.getElement().querySelector(`.card__btn--edit`).addEventListener(`click`, () => {
    container.replaceChild(cardEdit.getElement(), card.getElement());
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  cardEdit.getElement().querySelector(`textarea`).addEventListener(`focus`, () => {
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  cardEdit.getElement().querySelector(`textarea`).addEventListener(`blur`, () => {
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  cardEdit.getElement().querySelector(`.card__save`).addEventListener(`click`, () => {
    container.replaceChild(card.getElement(), cardEdit.getElement());
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  render(container, card.getElement(), Position.beforeEnd);
};

const buttonLoadMore = document.querySelector(`.load-more`);

if (cards.filter((card) => card.isArchive === false).length === 0) {
  const noCards = new NoCards();
  render(document.querySelector(`.board__tasks`), noCards.getElement(), Position.afterBegin);
  buttonLoadMore.style.display = `none`;
} else {
  cards.slice(0, CardsCount.CARDS_ACTIVE).forEach(renderCard);
}


buttonLoadMore.addEventListener(`click`, () => {
  if (cardBalance > CardsCount.ADD_BY_CLICK) {
    cardBalance -= CardsCount.ADD_BY_CLICK;
    return cards.slice(0, CardsCount.ADD_BY_CLICK).forEach(renderCard);
  }
  buttonLoadMore.style.display = `none`;
  return cards.slice(0, cardBalance).forEach(renderCard);
});
