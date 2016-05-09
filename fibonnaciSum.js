/*
TASK:
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
*/

function sumFibs(num) {
  var testArr = [1, 1];
  var fibonnaci = 2;
  var previousNum = 1;
  var addNum = 1;
  var fibNum;
  var i = 0;
  while(i < num){
    fibNum = previousNum + addNum;
    previousNum = addNum;
    addNum = fibNum;
    if(fibNum % 2 !== 0) {
      testArr.push(fibNum);
      fibonnaci += fibNum;
    }
    i = testArr[testArr.length - 1];
  }
  if (testArr[testArr.length - 1] === num) {
    fibonnaci = testArr.reduce(additions);
    return fibonnaci;
  }
  fibonnaci = testArr.reduce(additions) - testArr[testArr.length - 1];
  return fibonnaci;
}

function additions(a, b) {
  return a + b;
}

/*
TESTS:
sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
*/
