/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.trim().split(" ");
    let answer = "";
    for (let i=arr.length-1; i >= 0; i--) {
        // console.log(arr[i]);
        if (arr[i] == "") continue;
        let subfix = i !== 0 ? " " : "";
        answer += arr[i] + subfix;
    }
    // console.log(answer);
    return answer;
};