module.exports.createContainer = function() {
  var container = document.createElement('div');

  document.body.appendChild(container);

  return container;
};