/*
TASK:
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function uniteUnique(arr1, arr2, arr3) {
  var args = Array.prototype.slice.call(arguments);
  var consolidatedArrs = args.reduce(function(a,b) {
    return a.concat(b);
  });
  var uniqueNums = [];
  var counterObj = {};
  for (var x = 0; x < consolidatedArrs.length; x++) {
    if (!counterObj[consolidatedArrs[x]]) {
      counterObj[consolidatedArrs[x]] = consolidatedArrs[x];
      uniqueNums.push(consolidatedArrs[x]);
    }
    else {
      continue;
    }
  }
  return uniqueNums;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

/*
TESTS:
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/
