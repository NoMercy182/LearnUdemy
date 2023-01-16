'use strict';

// Тернарный оператор ----------------------------------------

const number = 50;

(number === 50) ? console.log('Yes') : console.log('no');

// Switch Case ----------------------------------------

const switchNumber = 50;

switch (switchNumber) {
  case 25:
    console.log(`no`);
    break;
  case 35:
    console.log(`no`);
    break;
  case 50:
    console.log(`Yes`);
    break;
  default:
    console.log(`error`);
}

// Логические операторы --------------------------------------------------------------

const hamburger = 3;
const fries = 0;
const cola = 2;

console.log(hamburger && fries && cola);

console.log(1 && 0); // 0
console.log(1 && 5); // 5
console.log(null && 5); // null
console.log(0 && 'dffdf'); // 0
console.log(null && ''); // null

// оператор && возвращает первое ложное значение, ну а если все прадивы - тогда последнее правдивое.

console.log(1 || 0); // 1
console.log(1 || 5); // 1
console.log(null || 5); // 5
console.log(0 || 'dffdf'); // 'dffdf' 
console.log(null || ''); // ''

// оператор || возвращает первое правдивое значение, Ну а если все непрадивы - тогда последнее ложное.

// 5 сущностей FALSE в js:

const arrFalse = [0, '', null, undefined, NaN];

// Cicles --------------------------------------------------------------

first: for (let i = 0; i < 3; i++) {
  console.log(`First level, this is i = ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level, this is j = ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 1) {
        continue first;
      }
      console.log(`Third level, this is k = ${k}`);
    }
  }
}