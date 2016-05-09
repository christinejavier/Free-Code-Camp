/*
TASK:
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
  var symbols = /[&<>'"]/g;
  var indexArr = [];
  str = str.split("");
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(symbols)){
      indexArr.push(i);
    }
  }
  var chars = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": "&apos;",
    '"': "&quot;"
  }
  for (var prop in chars) {
    for (var a = 0; a < indexArr.length; a++) {
      if (str[indexArr[a]] === prop) {
        str[indexArr[a]] = chars[prop];
      }
    }
  }
  str = str.join("");
  return str;
}

/*
TESTS:
convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") should return Shindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.
*/
