/*
TASK:
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
*/

function translate(str) {
  var regexp = /[aeiou]/g;
  if (str.substr(0,1).match(regexp)) {
    str = str + "way";
    return str;
  }

  if (!str.substr(0,1).match(regexp)) {
    var beginning = [];
    var end = [];
    var answer;
    str = str.split("");
    for (var i = 1; i < str.length; i++) {
      if (str[i].match(regexp)) {
        answer = str.splice(i);
        answer = answer.concat(str, "ay").join("");
        return answer;
      }
    }
  }
}

/*
TESTS:
translate("california") should return "aliforniacay".
translate("paragraphs") should return "aragraphspay".
translate("glove") should return "oveglay".
translate("algorithm") should return "algorithmway".
translate("eight") should return "eightway".
*/
