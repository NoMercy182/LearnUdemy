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

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба
//(тоже базовая математика, иногда используется в создании анимаций). Эта функция
// принимает в себя целое число со значением длины ребра куба.Ответ выведите в формате
//строки, который изображен в примерах.

const calculateVolumeAndArea = (a) => {
  if (typeof (a) !== 'number' || a <= 0) {
    return `При вычислении произошла ошибка`;
  } else {
    let area = (a ** 2) * 6;
    let volume = a ** 3;
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
  }
};

console.log(calculateVolumeAndArea(15));

//

const getCoupeNumber = (a) => {
  if (typeof (a) !== 'number' || (String(a).indexOf('.')) >= 0 || a < 0) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (a === 0 || a > 36) {
      return "Таких мест в вагоне не существует";
  } else {
      return Math.ceil(a / 4);
  }
};

console.log(getCoupeNumber(23.3));

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в 
//нужном формате строки. (Смотри пример).Обратите внимание на окончание слова "час" - 
//оно меняется в зависимости от цифры.Если вместо аргумента приходит не число, дробное
// или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

const getTimeFromMinutes = (minutes) => {
  let hours = Math.floor(minutes / 60);
  let min = minutes % 60;
  return `${hours}:${min}`;
};

console.log(getTimeFromMinutes(0));

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из 
//них.Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

const findMaxNumber = (a, b, c, d) => {
  let res1;
  a > b ? res1 = a : res1 = b;
  let res2;
  c > d ? res2 = c : res2 = d;
  let result;
  res1 > res2 ? result = res1 : result = res2;
  return result;
};

console.log(findMaxNumber(0, 200.6004, -30, 5000));

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное
//число.Она должна возвращать строку, в которой будут через пробел выведены числа
//Фибоначчи.Причем, их количество должно быть равно переданному аргументу.
