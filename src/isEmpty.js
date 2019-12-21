/*
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2019-12-21 15:53:35
 * @LastEditors  : starkwang
 * @LastEditTime : 2019-12-21 16:00:02
 * @Description: file content
 */

'use strict';
// const invariant = require('invariant');
export const isEmpty = (value) => {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (typeof value === 'object') {
    if (value) {
      // invariant(
      //   !isIterable(value) || value.size === undefined,
      //   'isEmpty() does not support iterable collections.',
      // );
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
