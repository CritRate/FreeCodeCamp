/**
 * 
 * 
 * @param {[]} arr Array to remove false values from (false,0,"",undefined,null,NaN)
 * @returns {[]}
 */
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    arr = arr.filter(val => {
        if (val === false || val === "" || val === undefined || val === null) {
            return false;
        }
        if (typeof val === "number") {

            if (val === 0 || isNaN(val)) {

                return false;
            }
        }
        return true;
    });
    return arr;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);