/*
TASK:
Convert the given number into a roman numeral.
*/
var tens = {
  0: "",
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX"
};

var hundreds = {
  0: "",
  1: "X",
  2: "XX",
  3: "XXX",
  4: "XL",
  5: "L",
  6: "LX",
  7: "LXX",
  8: "LXXX",
  9: "XC"
};

var thousands = {
  0: "",
  1: "C",
  2: "CC",
  3: "CCC",
  4: "CD",
  5: "D",
  6: "DC",
  7: "DCC",
  8: "DCCC",
  9: "CM"
};

function convertToRoman(num) {
  var answer = [];
  var remains;
  num = num.toString().split("");
  if (num.length > 3) {
    remains = num.splice(-3);
    num = num.join("");
    for (var i = 0; i < num; i++) {
      answer.push("M");
    }
    answer.push(thousands[remains[0]]);
    answer.push(hundreds[remains[1]]);
    answer.push(tens[remains[2]]);
  }
  else if (num.length === 3) {
    answer.push(thousands[num[0]]);
    answer.push(hundreds[num[1]]);
    answer.push(tens[num[2]]);
  }
  else if (num.length === 2) {
    answer.push(hundreds[num[0]]);
    answer.push(tens[num[1]]);
  }
  else if (num.length === 1) {
    answer.push(tens[num[0]]);
  }
  answer = answer.join("");
  return answer;
}

console.log(convertToRoman(5000000));

/*
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/
