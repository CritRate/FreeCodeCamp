/**
 * 
 * 
 * @param {Number} num Number to factorialize
 * @returns {Number}
 */
function factorialize(num) {

    var i = 1;
    var sum = 1;

    while (i <= num) {
        sum *= i;
        i++;
    }

    console.log(sum);

    return sum;
}
factorialize(10);