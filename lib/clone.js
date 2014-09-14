module.exports = clone;

function clone(element) {
  return element.cloneNode(true);
}