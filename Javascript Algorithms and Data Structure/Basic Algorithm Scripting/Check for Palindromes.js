/**
 * 
 * 
 * @param {String} str Check if string is palindrome
 * @returns {Boolean}
 */
function palindrome(str) {
    // Good luck!

    var reverse = str.match(/[a-zA-Z0-9]+/g).join("").toLowerCase();

    str = reverse;

    reverse = reverse.replace(/\s/g, "");
    reverse = reverse.split("").reverse().join("");

    console.log(reverse);
    console.log(str);
    console.log(str == reverse);

    return str == reverse;
}

palindrome("0_0 (: /-\ :) 0-0");