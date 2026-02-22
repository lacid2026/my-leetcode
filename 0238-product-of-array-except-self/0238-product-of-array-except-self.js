/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = new Array(nums.length).fill(1);
    
    // answer[i]는 i번째 원소의 왼쪽에 있는 모든 원소들의 곱(left->right)
    let leftProduct = 1;
    for (let i =0; i < nums.length; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }
    // answer[i]는 i번째 원소의 오른쪽에 있는 모든 원소들의 곱(right->left)
    let rightProduct = 1;
    for (let i =nums.length-1; i >=0 ; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
};