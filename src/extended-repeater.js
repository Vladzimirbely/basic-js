const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!('repeatTimes' in options)) {
    options.repeatTimes = 1;
  } 
  if (!('separator' in options)) {
    options.separator = '+';
  } 
  if (!('addition' in options)) {
    options.addition = '';
  } 
  if (!('additionRepeatTimes' in options)) {
    options.additionRepeatTimes = 1;
  } 
  if (!('additionSeparator' in options)) {
    options.additionSeparator = '|';
  } 
    
  const arr = (repeatTimes, fill, separation) => new Array(repeatTimes).fill(String(fill)).join(separation);
  const newArr = arr(options.additionRepeatTimes, options.addition, options.additionSeparator);
  const res = arr(options.repeatTimes, str + newArr, options.separator);
  return res;
}

module.exports = {
  repeater
};
