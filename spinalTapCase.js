/*
TASK:
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  var smallLetters = /[a-z]/g;
  str = str.split("");
  for (var i = 0; i < str.length; i++) {
    if (str[i] === " " && str[i+1] === str[i+1].toUpperCase()) {
      str[i] = "-";
    }
    if(str[i] === str[i].toUpperCase()) {
      if (str[i-1] === undefined){
        continue;
      }
      else if(smallLetters.test(str[i-1]) === true) {
        str.splice(i, 0, "-");
      }
    }
    if(str[i] === " " || str[i] === "_" || str[i] === "-" && str[i+1] === "-") {
      delete str[i];
    }
  }
  str = str.join("").toLowerCase();
  return str;
}

/*
TESTS:
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/
