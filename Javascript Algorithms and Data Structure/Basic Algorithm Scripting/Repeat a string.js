/**
 * 
 * 
 * @param {String} str String to repeat
 * @param {String} num How many times to repeat previous String
 * @returns {String}
 */
function repeatStringNumTimes(str, num) {
    // repeat after me

    var result = "";

    if (num < 0) {
        return "";
    }
    for (var i = 1; i <= num; i++) {
        result += str;
    }

    return result;
}

repeatStringNumTimes("abc", 3);