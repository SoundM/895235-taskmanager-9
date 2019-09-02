export const Position = {
  afterBegin: `afterBegin`,
  beforeEnd: `beforeEnd`,
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const render = (container, element, place) => {
  switch (place) {
    case Position.beforeEnd:
      container.append(element);
      break;
    case Position.afterBegin:
      container.prepend(element);
      break;
  }
};

export const unRender = (element) => {
  if (element) {
    element.remove();
  }
};
