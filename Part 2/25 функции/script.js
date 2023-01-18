'use strict';

function showFirstMessage(text) {
  console.log(text);
  let num = 20;
}

showFirstMessage('hello');

function calc(a, b) {
  return (a + b);
}

console.log(calc(4, 3));
console.log(calc(6, 5));
console.log(calc(10, 6));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
  console.log('hello');
};

logger();

// const calcul = (a, b) =>  a + b;
const calcul = (a, b) => {
  return a + b;
};

const usdCurr = 28;
const euroCurr = 32;

function convert(amount, curr) {
  console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, euroCurr);

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

const funcUserName = (name) => {
  return `Hello, ${name}`;
};

console.log(funcUserName('No Mercy'));

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и
// возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

const ret3Numbers = (num) => {
  let arr = [];
  arr[0] = num - 1;
  arr[1] = num;
  arr[2] = num + 1;
  return arr;
};

console.log(ret3Numbers(50));

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое 
// число - это база, второе число - это сколько раз нужно будет повторить это число в
//прогрессии. (Смотри пример ниже).Функция должна возвращать строку(или число в особых 
// случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами
 //"---".После последнего числа их не должно быть.

//Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто
// первый аргумент. (Проверяем через оператор typeof)

const getMathResult = (a, b) => {
  if (typeof (b) !== 'number' || b <= 0) {
    return a;
  } else {
    let result = '';
    for (let i = 1; i <= b; i++) {
      result += (a * i) + '---';
    }
    return result.substring(0, result.length - 3);
  }
};

console.log(getMathResult(3, 0));

