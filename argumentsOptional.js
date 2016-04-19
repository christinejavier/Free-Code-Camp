/*
TASK:
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether(input) {
  var args = Array.from(arguments); //makes array of arguments in addTogether
  var testForUndefined = args.every(function(a) {
    return Number.isInteger(a); //returns true if every argument is a number
  });
  var sumOfNums; //value of sum of all the numerical arguments
  if (!testForUndefined) {
    return undefined; //returns undefined if there is at least one argument in addTogether call that is NaN
  }
  else if (arguments.length === 1) {
    return function(x) {
      if (!Number.isInteger(x)) {
        return undefined; //returns undefined if argument in second function call is NaN
      }
      else {
        return x + input; //returns sum of input value and argument in second function call
      }
    }
  }
  else if (arguments.length > 1) {
    sumOfNums = args.reduce(function(a, b) { //sums all numerical arguments
      return a + b;
    });
    return sumOfNums; //returns sum of numerical arguments
  }
}

/*
TESTS:
addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
*/
