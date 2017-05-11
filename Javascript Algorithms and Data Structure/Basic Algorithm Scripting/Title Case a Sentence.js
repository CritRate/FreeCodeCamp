/**
 * 
 * 
 * @param {String} str Change first letter of all string to uppercase and all other letter to lowercase
 * @returns 
 */
function titleCase(str) {

    var newWord = "";

    str = str.split(" ");

    for (var j = 0; j < str.length; j++) {
        for (var i = 0; i < str[j].length; i++) {
            console.log(newWord);
            if (i === 0) {
                newWord += str[j][i].toUpperCase();
                continue;
            }
            newWord += str[j][i].toLowerCase();
        }
        if (j == str.length - 1) {
            break;
        }
        newWord += " ";
    }
    console.log(newWord);
    return newWord;
}

titleCase("sHoRt AnD sToUt");