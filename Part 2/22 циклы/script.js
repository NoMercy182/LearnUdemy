'use strict';

let num = 50;

while (num <= 55) {
  console.log(num);
  num++;
}

do {
  console.log(num);
  num++;
}
while (num <= 55);


for (let i = 1; i < 8; i++) {
  if (i === 6) {
    break;
  }
  console.log(i);
}

for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 10; j < 13; j++) {
    console.log(j);
    for (let k = 20; k < 23; k++) {
      console.log(k);
    }
  }
}

let result = '';

for (let i = 1; i < 7; i++) {
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);

// task 1
// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

for (let i = 5; i < 11; i++) {
  console.log(i);
}

// task 2
// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке
//(20, 19, 18...).Когда цикл дойдет до числа 13 - остановить весь цикл

for (let i = 20; i > 9; i--) {
  console.log(i);
  if (i === 13) {
    break;
  }
}

// task 3
// При помощи цикла for выведите чётные числа от 2 до 10 включительно

for (let i = 1; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// task 4
// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же.
// Не создайте бесконечный цикл! Иначе браузер может зависнуть.

for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
      continue;
  } else {
      console.log(i);
  }
}

let number = 2;

while (number < 16) {
  number++;
  if (number % 2 === 0) {
    continue;
  } else {
    console.log(number);
  }
}

// task 5 
// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива 
//можно сформировать так же, как и обращаться к ним: arr[0]

let arr = [];
let nums = 5;

for (let i = 0; i < 6; i++) {
  arr[i] = nums;
  nums++;
}

console.log(arr);

// task 6
// Заполните новый массив (result) числами из старого (arr). Количество элементов в 
//массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
//Должен получиться точно такой же массив

const arr2 = [3, 5, 8, 16, 20, 23, 50];
const result2 = [];

for (let i = 0; i < arr2.length; i++) {
  result2[i] = arr2[i];
}

console.log(result2);

// task 7 
// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если 
// попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
  if (typeof(data[i]) == 'number') {
    data[i] = data[i] * 2;
  } else {
    data[i] += ' - done';
  }
}

console.log(data);

// task 8
// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
//Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

const data2 = [5, 10, 'Shopping', 20, 'Homework'];

let resulttt = [];

for (let i = 1; i <= data2.length; i++) {
  resulttt[i-1] = data2[data2.length - i];
}
console.log(resulttt);