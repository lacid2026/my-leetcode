/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const cntMap = new Map();
    for (let num of nums) {
        if (!cntMap.has(num)) {
            cntMap.set(num, 1)
        } else {
            let cnt = cntMap.get(num);
            cntMap.set(num, ++cnt);
        }    
    }
    let answer = false;
    cntMap.forEach((value, index) => {
        // console.log(`i:${index}, value:${value}`);
        if (value >=2 ) answer = true;
    });
    return answer;
};