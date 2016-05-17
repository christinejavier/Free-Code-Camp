/*
TASK:
Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.
*/
function repeatStringNumTimes(str, num) {
  var answerStr = "";
  while(num > 0){
    answerStr = answerStr.concat(str);
    num--;
  }
  return answerStr;
}
/*
TESTS:
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".
*/
