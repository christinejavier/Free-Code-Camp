/*
TASK:
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

//SOLUTION 1
function largestOfFour(arr) {
  arr.forEach(function(arr1){
    return arr1.sort(function(a, b) {
      return b - a;
    });
  });
  arr.forEach(function(arr1){
    return arr1.splice(1, 3);
  });
  arr = arr.reduce(function(arr1, arr2){
    return arr1.concat(arr2);
  });
  return arr;
}

//SOLUTION 2
function largestOfFour(arr) {
  var answerArr = [];
  arr.forEach(function(inputArr){
    answerArr.push(Math.max.apply(null,inputArr));
  });
  return answerArr;
}

/*
TESTS:
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
*/
