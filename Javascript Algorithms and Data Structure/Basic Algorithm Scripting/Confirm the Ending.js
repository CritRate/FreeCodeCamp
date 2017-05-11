/**
 * 
 * 
 * @param {String} str String to check for ending 
 * @param {String} target ending String
 * @returns {Boolean}
 */
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    return str.substring(str.length - target.length, str.length) === target;
}

confirmEnding("He has to give me a new name", "name");