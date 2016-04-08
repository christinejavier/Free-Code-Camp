/*
TASK:
Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.
*/

var divisbleArr;
function checksIfPrime(num) {
  var counter = 0;
  for (var i = 0; i < divisbleArr.length; i++) {
    if (num % divisbleArr[i] === 0) {
      counter++;
    }
  }
   if (counter <= 1) {
    return true;
  }
  else {
    return false;
  }
}

function sumPrimes(num) {
  var numsList = [];
  for (var i = 2; i <= num; i++) {
    numsList.push(i);
  }
  divisbleArr = numsList;
  var newList = numsList.filter(checksIfPrime);
  return newList.reduce(function(a,b) {
    return a + b;
  })
}

console.log(sumPrimes(977));
