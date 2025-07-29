'use strict';

// Higher-order Function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Eph');
greeterHey('Steven');

greet('Hello')('Eph');

//
const greetArr = greetings => name => console.log(`${greetings}, ${name}`);

greetArr('Howdy')('P');
