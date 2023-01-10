'use strict';

// alert('Hello');
// const result = confirm("Are you here?");
// console.log(result); // true / false

const answer = prompt('Your age ?', '18');
console.log(answer);
console.log(typeof(NaN)); // number
console.log(NaN + 1); // NaN

let b = NaN;
console.log('ba' + b); // baNaN

const arr = [];

arr[0] = prompt('What is your name?');
arr[1] = prompt('What is your surname?');
arr[2] = prompt('What is your age?');

// document.write(arr);

const category = 'toys';

console.log(`https//someurl.com/${category}`);
