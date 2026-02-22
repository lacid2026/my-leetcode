/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init;
    for(const num of nums) {
        result = fn(result, num);
    }
    // console.log(`result::${result}`);
    return result;
};