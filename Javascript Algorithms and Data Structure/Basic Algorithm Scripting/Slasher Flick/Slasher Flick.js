/**
 * 
 * 
 * @param {[]} arr Original Array
 * @param {Number} howMany Number to slice from the begining of the array
 * @returns {[]}
 */
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    if (howMany > arr.length) {
        return [];
    }
    arr = arr.slice(howMany, arr.length);

    return arr;
}

slasher([1, 2, 3], 2);