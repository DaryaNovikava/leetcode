// DESCRIPTION
// Write a function expect that helps developers test their code. 
// It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 
// Example :
// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// MY SOLUTION
var expect = function(val) {
    let toBe = function(valueCompare) {
       if (val === valueCompare) {
        return true;
       } throw new Error("Not Equal");
    };
     let notToBe = function(valueCompare) {
        if (val !== valueCompare) {
            return true;
        }  throw new Error("Equal"); 
    };
    return {
        toBe: toBe,
        notToBe: notToBe
    };
};

console.log(expect(5).toBe(5))
console.log(expect(5).notToBe(5))
