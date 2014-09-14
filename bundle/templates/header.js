(function (global, factory) {
  // AMD support
  if (typeof define === "function" && define.amd) {
    // Define as an anonymous module
    define([], function() {
      return factory();
    });
  } else if (typeof exports !== 'undefined') {
    // Next for Node.js or CommonJS
    module.exports = factory();
  } else {
    // Browser globals (global is window)
    global.___lib = factory();
  }
}(window || this, function () {
