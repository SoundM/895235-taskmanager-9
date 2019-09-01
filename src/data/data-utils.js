const getRandomItemFrom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
const getRandomBoolean = () => {
  return Boolean(Math.round(Math.random()) * 0.5);
};
const getRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
};
const getRandomTags = (tagsInsert) => {
  let j;
  let temp;
  for (let i = tagsInsert.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = tagsInsert[j];
    tagsInsert[j] = tagsInsert[i];
    tagsInsert[i] = temp;
  }
  return tagsInsert.slice(0, getRandomNumberInRange(0, 3));
};

export {getRandomBoolean, getRandomItemFrom, getRandomNumberInRange, getRandomTags};
