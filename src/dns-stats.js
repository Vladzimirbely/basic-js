const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  
  domains.forEach((el) => {
    let str = '';
    const arr = el.split('.');
    let i = arr.length - 1;

      while (i >= 0) {
        str = str + '.' + arr[i];
        (obj.hasOwnProperty(str)) ? obj[str]++ : obj[str] = 1;
        i--;
      }
  });

  return obj;
}

module.exports = {
  getDNSStats
};
