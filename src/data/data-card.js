import {getRandomBoolean, getRandomItemFrom, getRandomTags} from './data-utils';
export const CardsCount = {
  CARDS_ACTIVE: 5,
  ADD_BY_CLICK: 2,
  All: 23,
};

const description = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
  `Отослать резюме`,
  `English урок`,
];
const tags = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`
];

const colors = [
  `black`,
  `yellow`,
  `blue`,
  `green`,
  `pink`,
];

export const getCard = () => ({
  description: getRandomItemFrom(description),
  dueDate: Date.now() + (Math.floor(Math.random() * 15) - 7) * 24 * 60 * 60 * 1000,
  tags: new Set(getRandomTags(tags)),
  repeatingDays: {
    'mo': getRandomBoolean(),
    'tu': getRandomBoolean(),
    'we': getRandomBoolean(),
    'th': getRandomBoolean(),
    'fr': getRandomBoolean(),
    'sa': getRandomBoolean(),
    'su': getRandomBoolean(),
  },
  color: getRandomItemFrom(colors),
  colors,
  isFavorite: getRandomBoolean(),
  isArchive: getRandomBoolean(),
});

export const cards = new Array(CardsCount.All).fill(``).map(getCard);
