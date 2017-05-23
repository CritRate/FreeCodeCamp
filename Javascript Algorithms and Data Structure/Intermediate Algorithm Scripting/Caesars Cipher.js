function rot13(str) { // LBH QVQ VG!

  var result = "";
  var minCharCode = 65;
  var maxCharCode = 90;

  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[a-zA-Z]/g)) {
      var num = str.charCodeAt(i);
      num -= 13;
      if (num < 65) {
        num = 65 - num;
        num = 90 - num + 1;
      }
      result += String.fromCharCode(num);
    } else {
      result += str[i];
    }
  }
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
