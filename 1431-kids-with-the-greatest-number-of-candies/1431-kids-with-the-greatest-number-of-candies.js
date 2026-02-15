/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    const maxCandyCnt = Math.max(...candies);
    // console.log(maxCandyCnt);
    for (let i =0; i < candies.length; i++) {
        if (maxCandyCnt > (candies[i] + extraCandies)) {
            result.push(false);
        } else {
            result.push(true);
        }
    }
    return result;
};