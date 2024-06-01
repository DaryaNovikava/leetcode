// DESCRIPTION
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
 
// Example :
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]

// MY SOLUTION
const createCounter = function(init) {
  let currentValue = init;
  let increment = function() {
    currentValue += 1;
    return currentValue;
  }
  let decrement = function() {
    currentValue -= 1;
    return currentValue;
  }
  let reset = function() {
    currentValue = init;
    return currentValue;
  }
  return {
    increment,
    decrement,
    reset
  }
};

const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
