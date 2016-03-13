/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
    var lesser;
    if (arr[0].length < arr[1].length) {
        lesser = arr[0];
    }
    else {
        lesser = arr[1];
    }
    
    var newArr =[];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].indexOf(lesser)) {
            newArr.push(true);
        }
        else {
            newArr.push(false);
        }
    }
    console.log(newArr);
    
    for (var j = 0; j < newArr.length; j++) {
        if (newArr[j] === false) {
            return false;
        }
    }
    return true;
}

mutation(["yo hello", "hell"]);
