/*
Find the smallest common multiple of the provided parameters that
can be evenly divided by both, as well as by all sequential numbers
in the range between these parameters.

The range will be an array of two numbers that will not necessarily
be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of
both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  var finalVal;
  var sortedArr = arr.sort(function(a,b) {
    return a - b;
  });
  var counter = sortedArr[1] * (sortedArr[1]-1);
  var multBy = sortedArr[1] * (sortedArr[1]-1);
  var biggest = sortedArr[1];
  function calledAgain(num) {
    for(var i = 2; i < biggest; i++) {
      if(num % i !== 0) {
        return calledAgain(num += counter);
      }
    }
    return num;
  }
  return calledAgain(multBy);
}
console.log(smallestCommons([1,5]));

/*
TEST CASES:
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
*/
