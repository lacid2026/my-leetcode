/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = [];
    arr.forEach((value, idx) => {
        if (fn(value, idx)) {
            filteredArr.push(value);
            // console.log(value);
        }
    });
    return filteredArr;
};