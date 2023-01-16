'use strict';

if (4 == 9) {
  console.log('true!');
} else {
  console.log('error!');
}

const num = 50;

if (num < 49) {
  console.log('error');
} else if (num > 100) {
  console.log('So many');
} else {
  console.log('ok');
}

(num === 50) ? console.log('true') : console.log('error');

const num1 = 500;

switch (num1) {
  case 49:
    console.log('false');
    break;
  case 100:
    console.log('false');
    break;
  case 50:
    console.log('true');
    break;
  default:
    console.log('fuck you.!.');
    break;
}