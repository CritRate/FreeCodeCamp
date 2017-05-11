/**
 * 
 * 
 * @param {Array<Number>} arr Array to remove numbers from with arguments array
 * @returns {Array<Number>}
 */
function destroyer(arr) {
    // Remove all the values

    for (var i = 1; i < arguments.length; i++) {
        arr = arr.filter(val => {
            if (val === arguments[i]) {
                return false;
            }
            return true;
        });
    }
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);