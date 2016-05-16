function slasher(arr, howMany) {
  var spliced = arr.splice(0, howMany);
  console.log(spliced);
  return arr;
}
console.log(
slasher([1, 2, 3], 2)
);
