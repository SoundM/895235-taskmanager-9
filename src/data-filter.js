export const getFilter = () => ({
  title: new Set([
    `all`,
    `overdue`,
    `today`,
    `favorites`,
    `repeating`,
    `tags`,
    `archive`,
  ]),
  count: () => {
    const cardElements = document.querySelectorAll(`.card`);
    return cardElements.length;
  },
});
