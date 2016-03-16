/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  str = str.toUpperCase();
  str = str.split("");
  var translation = "";
  var syms = new RegExp("\\W"); //MATCHES NON-LETTER CHARS

  for (var i = 0; i < str.length; i++) {
    var test = str[i].match(syms); //TEST IS TRUE FOR A NON-LETTER CHARACTER

    if(test) { //IF str[i] IS A NON-LETTER CHAR, ADD str[i] TO translation
      translation = translation + str[i];
    }

    if(!test) { //IF str[i] IS A LETTER CHAR
      str[i] = str[i].charCodeAt(); //str[i] changes to unicode counterpart
      if(str[i] > 77) { // LETTERS N - Z
        var temp = str[i] - 13;
        var inLetter = String.fromCharCode(temp);
        translation = translation + inLetter;
      }
      if (str[i] < 78) { //LETTERS A - M
        str[i] += 13;
        var letter = String.fromCharCode(str[i]);
        translation = translation + letter;
      }
    }
  }
  return translation;
}

/*
TEST CASES:
rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
rot13("SERR YBIR?") should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
*/
