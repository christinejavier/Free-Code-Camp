/*
TASK:
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
  str = str.split("");
  var missingVal;
  for (var i = 0; i < str.length - 1; i++) {
    if(str[i].charCodeAt() + 1 !== (str[i+1]).charCodeAt()) {
      missingVal = (str[i]).charCodeAt() + 1;
      missingVal = String.fromCharCode(missingVal);
    }
  }
  return missingVal;
}

/*
TESTS:
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
*/
