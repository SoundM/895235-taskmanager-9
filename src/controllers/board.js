import {BoardFilter} from '../components/board-filters.js';
import {BoardCardsList} from "../components/board-cards-list";
import {CardEdit} from '../components/card-edit.js';
import {Card} from '../components/card.js';
import {Button} from '../components/button.js';
import {NoCards} from '../components/no-cards.js';
import {render, Position} from '../components/utils.js';
import {CardsCount} from '../data/data-card.js';

let cardBalance = CardsCount.All - CardsCount.CARDS_ACTIVE;
let cardCount = CardsCount.CARDS_ACTIVE;

export class BoardController {
  constructor(container, cards) {
    this._container = container;
    this._cards = cards;
    this._boardFilter = new BoardFilter();
    this._boardCardList = new BoardCardsList();
    this._button = new Button();
    this._noCards = new NoCards();
  }

  init() {
    render(this._container, this._boardFilter.getElement(), Position.BEFORE_END);
    render(this._container, this._boardCardList.getElement(), Position.BEFORE_END);
    render(this._container, this._button.getElement(), Position.BEFORE_END);


    const buttonLoadMore = document.querySelector(`.load-more`);
    const boardTask = document.querySelector(`.board__tasks`);

    if (this._cards.filter((card) => card.isArchive === false).length === 0) {
      render(boardTask, this._noCards.getElement(), Position.AFTER_BEGIN);
      buttonLoadMore.style.display = `none`;
    } else {
      this._cards.slice(0, CardsCount.CARDS_ACTIVE).forEach(this._renderCard);
    }

    buttonLoadMore.addEventListener(`click`, () => {
      if (cardBalance > CardsCount.ADD_BY_CLICK) {
        cardBalance -= CardsCount.ADD_BY_CLICK;
        cardCount += CardsCount.ADD_BY_CLICK;
        return this._cards.slice(0, CardsCount.ADD_BY_CLICK).forEach(this._renderCard);
      }
      cardCount = CardsCount.All;
      buttonLoadMore.style.display = `none`;
      return this._cards.slice(0, cardBalance).forEach(this._renderCard);
    });

    this._boardFilter.getElement()
      .addEventListener(`click`, (evt) => this._onBoardFilterClick(evt));
  }

  _renderCard(taskMock) {
    const container = document.querySelector(`.board__tasks`);
    const card = new Card(taskMock);
    const cardEdit = new CardEdit(taskMock);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this._boardCardList.replaceChild(card.getElement(), cardEdit.getElement());
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

    render(container, card.getElement(), Position.BEFORE_END);
  }

  _onBoardFilterClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== `A`) {
      return;
    }

    this._boardCardList.getElement().innerHTML = ``;

    switch (evt.target.dataset.sortType) {
      case `date-up`:
        const sortedByDateUpTasks = this._cards.slice(0, cardCount).sort((a, b) => a.dueDate - b.dueDate);
        sortedByDateUpTasks.forEach((taskMock) => this._renderCard(taskMock));
        break;
      case `date-down`:
        const sortedByDateDownTasks = this._cards.slice(0, cardCount).sort((a, b) => b.dueDate - a.dueDate);
        sortedByDateDownTasks.forEach((taskMock) => this._renderCard(taskMock));
        break;
      case `default`:
        this._cards.slice(0, cardCount).forEach(this._renderCard);
        break;
    }
  }
}
