/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // The word1 and word2 have been merged 
    let mergeStr = "";
    let minLength = Math.min(word1.length, word2.length);
    console.log(minLength);
    // 1. 길이가 같은 부분까지는 순서대로 붙임
    for (let i=0; i< minLength; i++) {
        mergeStr += word1.at(i);
        mergeStr += word2.at(i);
    }
    console.log(`1.mergeStr::${mergeStr}`);
    if (word1.length > minLength) {
        mergeStr += word1.slice(minLength, word1.length);    
    } else if (word2.length > minLength) {
        mergeStr += word2.slice(minLength, word2.length);    
    }
    console.log(`2.mergeStr::${mergeStr}`);
    return mergeStr;
};