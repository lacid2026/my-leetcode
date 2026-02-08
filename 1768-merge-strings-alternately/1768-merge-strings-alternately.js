/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // The word1 and word2 have been merged 
    let mergeStr = "";
    let minLength = Math.min(word1.length, word2.length);
    let maxLength = Math.max(word1.length, word2.length);
    // console.log(`maxLength::${maxLength}`);
    // 1. 길이가 같은 부분까지는 순서대로 붙임
    for (let i=0; i< maxLength; i++) {
        if (word1.at(i)) mergeStr += word1.at(i);
        if (word2.at(i)) mergeStr += word2.at(i);
    }
    return mergeStr;
};