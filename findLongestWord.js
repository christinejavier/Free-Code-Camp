/*
TASK:
Return the length of the longest word in the provided sentence.
*/

function findLongestWord(str) {
  var longestWord = 0;
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > longestWord) {
      longestWord = str[i].length;
    }
  }
  return longestWord;
}

/*
TESTS:
findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWord("May the force be with you") should return 5.
findLongestWord("Google do a barrel roll") should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/
