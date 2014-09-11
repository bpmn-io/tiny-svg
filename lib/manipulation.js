function remove(element) {
  element.parentNode.removeChild(element);
  return element;
}

function clear(element) {
  var child;

  while (!!(child = element.firstChild)) {
    remove(child);
  }

  return element;
}

function clone(element) {
  return element.cloneNode(true);
}

function append(element, target) {
  target.appendChild(element);
  return element;
}

function before(element, target) {
  target.parentNode.insertBefore(element, target);
  return element;
}

function after(element, target) {
  target.parentNode.insertAfter(element, target);
  return element;
}

function replace(element, replacement) {
  element.parentNode.replaceChild(replacement, element);
  return replacement;
}

module.exports = {
  clear: clear,
  clone: clone,
  remove: remove,
  append: append,
  before: before,
  replace: replace
};