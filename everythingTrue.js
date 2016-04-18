/*
TASK:
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.
*/

//Implements a for loop
function truthCheck(collection, pre) {
  var tabled = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i][pre]) {
      tabled.push(true);
    }
    else {
      tabled.push(false);
    }
  }
  return tabled.every(function(x) {
    if (x === true) {
      return true;
    }
  });
}

//Uses the every method instead of a for loop
function truthCheck(collection, pre) {
  return collection.every(truthy);
  function truthy(x) {
    if (x[pre]) {
      return true;
    } else {
      return false;
    }
  }
}



/*
TESTS:
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") should return true
truthCheck([{"single": "yes"}], "single") should return true
truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false
*/
