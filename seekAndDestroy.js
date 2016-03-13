/*You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.*/

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0,1);
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < arr.length;j++) {
      if (args[i] === arr[j]) {
        delete arr[j];
      }
    }
  }
  arr = arr.filter(function(x) {
    return Boolean(x);
  });
  return arr;
}
console.log(destroyer([0,1,2,3,4,5], 0, 4, 5));
