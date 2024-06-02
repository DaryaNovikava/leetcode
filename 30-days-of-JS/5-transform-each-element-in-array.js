// DESCRIPTION
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

// Example 1:
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]

// Example 2:
// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]

// MY SOLUTION
const map = function(arr, fn) {
    let newArr = [];
      for (let i = 0; i < arr.length; i++) {
      newArr.push(fn(arr[i], i));
  }
  return newArr;
};

let arr = [1,2,3];
let fn1 = function plusone(n) { return n + 1; }
let fn2 = function plusI(n, i) { return n + i; }
let fn3 = function constant(n, i) { return 42; }

console.log(map(arr, fn1));
console.log(map(arr, fn2));
console.log(map(arr, fn3));
