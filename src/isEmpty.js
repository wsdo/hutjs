/*
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2019-12-21 15:53:35
 * @LastEditors  : starkwang
 * @LastEditTime : 2019-12-21 16:00:02
 * @Description: file content
 */
const NODE_ENV = process.env.NODE_ENV;
const invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1;
    throw error;
  }
};


export const isEmpty = (value) => {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (typeof value === 'object') {
    if (value) {
      invariant(
        !isIterable(value) || value.size === undefined,
        'isEmpty() does not support iterable collections.',
      );
      for (const _ in value) {
        return false;
      }
    }
    return true;
  } else {
    return !value;
  }
}

function isIterable(value){
  if (typeof Symbol === 'undefined') {
    return false;
  }
  return value[Symbol.iterator];
}
