/**
 * 
 * 
 * @param {String} str Check for longest word in a String
 * @returns {Number}
 */
function findLongestWord(str) {

    var splitStr = str.split(" ");

    var longestWord = 0;

    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > longestWord) {
            longestWord = splitStr[i].length;
        }
    }
    console.log(longestWord);
    return longestWord;

}
findLongestWord("The quick brown fox jumped over the lazy dog");