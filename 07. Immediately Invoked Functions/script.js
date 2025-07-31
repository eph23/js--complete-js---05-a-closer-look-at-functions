'use strict';

// Immediately Invoked Function
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('Hey'))();

{
  const alsoPrivate = 23;
  var notPrivate = 46;
}
// console.log(alsoPrivate);
console.log(notPrivate);
