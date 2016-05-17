/*
TASK:
Remove all falsy values from an array.
*/
function bouncer(arr) {
  arr = arr.filter(truthyVals);
  return arr;
}

function truthyVals(arg){
  return (Boolean(arg) === true);
}
/*
TESTS:
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
*/
