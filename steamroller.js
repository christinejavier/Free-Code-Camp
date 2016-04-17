/*
TASK:
Flatten a nested array. You must account for varying levels of nesting.
*/


function steamrollArray(arr) {
  var answer = [];
  flatten(arr);

  function flatten(arr) {
    arr.forEach(function(item) {
      if (!Array.isArray(item)) {
        answer.push(item);
      }
      else {
        flatten(item);
      }
    });
  }
  return answer;
}

/*
TESTS:
*/
console.log(
steamrollArray([[["a"]], [["b"]]]),
//should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]),
//should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]),
//should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]])
// //should return [1, {}, 3, 4].

);
