module.exports = remove;

function remove(element) {
  element.parentNode.removeChild(element);
  return element;
}