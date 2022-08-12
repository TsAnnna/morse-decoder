const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let arr = [];

    for(let i = 0; i < Math.ceil(expr.length / 10); i++) {
        arr[i] = parseInt(expr.slice(i * 10, (i * 10) + 10)).toString();
    }

    let arr1 =  arr.map(element => element.replace(/11/g, "-"));
    arr1 =  arr1.map(element => element.replace(/10/g, "."));
    arr1.forEach(element => result += MORSE_TABLE[element]);
    result = result.replace(/undefined/g, ' ');
    return result;

}

module.exports = {
    decode
}