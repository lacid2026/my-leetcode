/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity, maxProfit = 0;
    for (let i=0; i<prices.length; i++) {
        if (prices[i] < minPrice ) {
            minPrice = prices[i];
        } else if (prices[i] > minPrice) {
            maxProfit = Math.max(maxProfit, (prices[i] - minPrice));
        }
    }
    console.log(`maxProfit:${maxProfit}`);
    return maxProfit;
};