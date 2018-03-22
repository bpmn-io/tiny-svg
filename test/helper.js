export function createContainer() {
  var container = document.createElement('div');

  document.body.appendChild(container);

  return container;
}


export function normalizeAttr(str) {
  return str.replace(/, /g, ' ');
}