const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let res = [];
  let arrSort = arr.filter(elem => elem !== -1).sort((a, b) => b - a);
  let i = 0;
      
  while (i < arr.length) {
    if (arr[i] === -1) {
      res.push(arr[i]);
    } else {
      res.push(arrSort.pop());
    }

    i += 1;
  }

  return res;
}

module.exports = {
  sortByHeight
};
