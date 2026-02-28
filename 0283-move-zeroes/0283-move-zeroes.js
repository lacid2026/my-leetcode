/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    /*
        생각: 
        - 순회하면서 0숫자를 카운트 한다
        - 배열에서 0을 제거한다
        - 배열의 맨 뒤에 0을 push한다.

    */
    let zero_cnt = 0;
    let n = nums.length;
    for (let i=0; i< n; i++) {
        if (nums[i] === 0 ) {
            zero_cnt++;  
            nums.splice(i,1);
            i--;          
        }    
    }  
    // console.log(`zero_cnt:${zero_cnt}, nums:${nums}`, );
    for (let i=0; i< zero_cnt; i++) {
        nums.push(0);
    }    
    // console.log(`nums::${nums}`);
};