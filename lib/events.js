/**
 * Events handling utility
 */

export function on(node, event, listener, useCapture) {
  node.addEventListener(event, listener, useCapture);
}

export function off(node, event, listener, useCapture) {
  node.removeEventListener(event, listener, useCapture);
}