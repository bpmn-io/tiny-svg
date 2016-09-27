var events = require('./lib/events'),
    query = require('./lib/query'),
    geometry = require('./lib/geometry');

module.exports = {

  // accessors
  attr: require('./lib/attr'),
  transform: require('./lib/transform'),

  // creation
  create: require('./lib/create'),

  // manipulation
  remove: require('./lib/remove'),
  clear: require('./lib/clear'),
  replace: require('./lib/replace'),
  append: require('./lib/append'),
  appendTo: require('./lib/appendTo'),
  clone: require('./lib/clone'),
  classes = require('./lib/classes'),

  // innerHTMl pendant
  innerSVG: require('./lib/innerSVG'),

  // events
  on: events.on,
  off: events.off,

  // query
  select: query.select,
  selectAll: query.selectAll,

  // geometry helpers
  createMatrix: geometry.createMatrix,
  createTransform: geometry.createTransform,
  createPoint: geometry.createPoint
};
