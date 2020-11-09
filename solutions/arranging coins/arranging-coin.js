// Source : https://leetcode.com/problems/arranging-coins/
// Author : Aawez Khan
// Date   : 2020-11-09

"use strict";

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let ans = Math.sqrt(1 + 8 * n) - 1;
  ans /= 2;

  return ~~ans;
};