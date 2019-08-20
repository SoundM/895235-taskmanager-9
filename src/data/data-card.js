export const getCard = () => ({
  description: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
    `Написать резюме`,
    `English урок`,
  ][Math.floor(Math.random() * 5)],

  dueDate: Date.now() + (Math.floor(Math.random() * 15) - 7) * 24 * 60 * 60 * 1000,

  tags: new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`
  ].sort(() => 0.5 - Math.random()).slice(0, Math.random() * 3)),

  repeatingDays: {
    'mo': false,
    'tu': false,
    'we': Boolean(Math.round(Math.random()) * 0.5),
    'th': false,
    'fr': false,
    'sa': false,
    'su': false,
  },

  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ][Math.floor(Math.random() * 5)],

  isFavorite: Boolean(Math.round(Math.random())),

  isArchive: Boolean(Math.round(Math.random())),
});
