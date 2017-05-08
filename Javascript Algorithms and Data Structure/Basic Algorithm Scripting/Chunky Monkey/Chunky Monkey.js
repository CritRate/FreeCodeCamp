/**
 * 
 * 
 * @param {Array<Number> arr Array to be reduced
 * @param {Number} size Chunk size of array to be reduced by
 * @returns {Array<Number[]>
 */
function chunkArrayInGroups(arr, size) {

    /**
     * @type {Array<Number[]>}
     */
    var newArray = [];

    for (var i = 0; i < arr.length; i += size) {
        newArray.push(arr.slice(i, (i + size)));
    }
    return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);