const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(node) {
    this.node = node;
  }

  encrypt(message = '', key = '') {
    if (message.length === 0 || key.length === 0) {
      throw new Error('Incorrect arguments!');
    }

    while (key.length < message.length) {
      key += key;
    }

    let upperMessage = message.toUpperCase();
    let arr = key.toUpperCase().split('');
    let res = [];

    for (let i = 0; i < upperMessage.length; i++) {
      let char = 'A'.charCodeAt();

      if (upperMessage.charCodeAt(i) > 64 && upperMessage.charCodeAt(i) < 91) {
        const curr = upperMessage.charCodeAt(i) - char;
        const newArr = arr[0].charCodeAt(0) - char;
        const result = char + (curr + newArr) % 26;
        const elem = String.fromCharCode(result);

        arr.shift();
        res.push(elem);
      } else {
        res.push(upperMessage[i]);
      }
    }

    if (this.node === false) {
      return res.reverse().join('');
    }
    
    const join = res.join('');
    return join;
  }

  decrypt(message = '', key = '') {
    if (message.length === 0 || key.length === 0) {
      throw new Error('Incorrect arguments!');
    }

    while (key.length < message.length) {
      key += key;
    }

    let upperMessage = message.toUpperCase();
    let arr = key.toUpperCase().split('');
    let res = [];
    
    for (let i = 0; i < upperMessage.length; i++) {
      let char = 'A'.charCodeAt();

      if (upperMessage.charCodeAt(i) > 64 && upperMessage.charCodeAt(i) < 91) {
        const curr = upperMessage.charCodeAt(i) - char;
        const newArr = arr[0].charCodeAt(0) - char;
        const result = char + (curr - newArr + 26) % 26;
        const elem = String.fromCharCode(result);

        arr.shift();
        res.push(elem);
      } else {
        res.push(upperMessage[i]);
      }
    }

    if (this.node === false) {
      return res.reverse().join('');
    }

    const join = res.join('');
    return join;
  }
}

module.exports = {
  VigenereCipheringMachine
};
