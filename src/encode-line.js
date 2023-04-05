const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str.replace(/(\w)\1*/g, (val) => (val.length > 1 ? val.length + val[0] : val[0]))
}

module.exports = {
  encodeLine
};
