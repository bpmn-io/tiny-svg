module.exports.createContainer = function() {
  var container = document.createElement('div');

  document.body.appendChild(container);

  return container;
};


module.exports.normalizeAttr = function(str) {
  return str.replace(/, /g, ' ');
};