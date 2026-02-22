/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const answer = [];
    arr.forEach((value, idx) => {
        if (fn(value, idx)) {
            answer.push(value);
            // console.log(value);
        }
    });
    return answer;
};