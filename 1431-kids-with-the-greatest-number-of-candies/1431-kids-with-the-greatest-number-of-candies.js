/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    const maxCandies  = Math.max(...candies);
    // console.log(maxCandyCnt);
    return candies.map(candy => {
            return candy + extraCandies >= maxCandies;
        });
};