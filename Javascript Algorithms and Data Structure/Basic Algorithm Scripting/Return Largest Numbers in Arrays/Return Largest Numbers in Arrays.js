/**
 * 
 * 
 * @param {Array<Number>} arr Finds largest number in every array of multidimensional array
 * @returns {Array<Number>}
 */
function largestOfFour(arr) {

    var maxNum = 0;
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxNum) {
                maxNum = arr[i][j];
            }
        }
        array.push(maxNum);
        maxNum = 0;
    }
    console.log(array);
    return array;
}

largestOfFour(
    [
        [13, 27, 18, 26],
        [4, 5, 1, 3],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
    ]
);