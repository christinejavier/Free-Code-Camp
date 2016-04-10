/*
TASK:
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  arr = arr.sort(leastToGrt); //sorts numbers from least to greatest
  var numsToAdd = [];
  for (var i = arr[0]; i < arr[1] + 1; i++) {
    numsToAdd.push(i); //pushes in all numbers between numbers in input array
  }
  numsToAdd = numsToAdd.reduce(adder);
  return numsToAdd;
}

function leastToGrt(num1, num2) { //sorts numbers from least to greatest
  return num1 - num2;
}

function adder(num1, num2) { //adds all numbers listed in array and returns one value
  return num1 + num2;
}

console.log(sumAll([1, 4]));

/*
TESTS:
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.

*/
