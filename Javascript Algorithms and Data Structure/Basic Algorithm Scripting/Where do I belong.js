/**
 * 
 * 
 * @param {Array<Number>} arr Array at which a value (second argument) should be inserted into
 * @param {Number} num Number to insert into an array
 * @returns {Number}
 */
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort((a, b) => a - b);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return 0;
        }
        if (arr[arr.length - 1] < num) {
            return arr.length;
        }
        if (arr[i] <= num && arr[i + 1] >= num) {
            return i + 1;
        }
    }

    return -1;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([2, 5, 10], 15));