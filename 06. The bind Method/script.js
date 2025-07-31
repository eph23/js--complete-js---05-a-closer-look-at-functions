'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Ephraim S');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//The call method
book.call(eurowings, 23, 'Sarah Williams');

book.call(lufthansa, 239, 'Marry Cooper');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Marry Cooper');

// The apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);

// The bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW('23', 'Steven Williams');
bookLH('23', 'Kane Williams');
bookLX('23', 'Larson Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Ephraim S');
bookEW23('Martha Cooper');

console.log(lufthansa);
console.log(eurowings);
console.log(swiss);

lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

// const buyPlane = lufthansa.buyPlane;

document
  .querySelector('.buy')
  // .addEventListener('click', buyPlane.bind(lufthansa));
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));

// Exercise
const vat2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(vat2(0.2)(100));
console.log(vat2(0.2)(200));
