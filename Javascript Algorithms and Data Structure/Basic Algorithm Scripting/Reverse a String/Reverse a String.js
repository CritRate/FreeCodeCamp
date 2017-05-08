/**
 * 
 * 
 * @param {String} str Reversing a string   
 * @returns {String}
 */
function reverseString(str) {

    str = str.split("").reverse().join("");

    console.log(str);

    return str;
}

reverseString("hello");