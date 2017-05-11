/**
 * 
 * 
 * @param {String} str String to truncate
 * @param {Number} num Number to truncate to. If number is lass than 3 return string + "...".if Number is bigger than String return unchanched String.
 * @returns {String}
 */
function truncateString(str, num) {
  // Clear out that junk in your trunk

  if (num < 4) {
    return str.slice(0, num) + "...";
  }
  if (num >= str.length) {
    return str;
  }
  return str.slice(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("Absolutely Longer", 2);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length - 2)
truncateString("A-tisket a-tasket A green and yellow basket", 8);
