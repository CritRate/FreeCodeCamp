/**
 * 
 * 
 * @param {Array<String>} arr String array of 2 words to check if the first word contains all characters of the second word
 * @returns {Boolean}
 */
function mutation(arr) {

    for (var i = 0; i < arr[1].length; i++) {
        console.log(arr[0].indexOf(arr[1][i]));
        if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1) {
            return false;
        }
    }

    return true;
}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);