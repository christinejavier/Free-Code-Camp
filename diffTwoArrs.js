/*
TASK:
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/
function diffArray(arr1, arr2) {
    var testObj1 = {};
    var testObj2 = {};
    var answer = [];
    var uniqueElems = [];
    for (var x = 0; x < arr1.length; x++) {
      testObj1[arr1[x]] = arr1[x];
    }
    for (var y = 0; y < arr2.length; y++) {
      testObj2[arr2[y]] = arr2[y];
    }
    for (var z = 0; z < arr1.length; z++) {
      if (!testObj2[arr1[z]]) {
        uniqueElems.push(arr1[z]);
      }
    }
    for (var q = 0; q < arr2.length; q++) {
      if (!testObj1[arr2[q]]) {
        uniqueElems.push(arr2[q]);
      }
    }
    return uniqueElems;
  }

/*
TESTS:
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].

*/
