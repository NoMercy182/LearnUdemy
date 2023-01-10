'use strict';

const arr = ['a', 'b', 'c'];
const arrObj = {
  0: 'a',
  1: 'b',
  2: 'c'
};

arrObj.b = '1234';

console.log(arr[1]);
// console.log(arrObj['b']); // если квадратные скобки то обращаемся к строке!
console.log(arrObj.b); // через точку - как будто к переменной

// const obj = { a: 1, b: 2 };

const obj = {
  Anna: 500,
  Alice: 800
};

