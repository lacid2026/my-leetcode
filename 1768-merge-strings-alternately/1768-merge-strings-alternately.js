/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let answer = "";
    let minLength = Math.min(word1.length, word2.length);
    
    for (let i =0; i<minLength; i++) {
        answer += word1[i];
        answer += word2[i];
    }
    if (word1.length >minLength) {
        let remainWord = word1.substring(minLength, word1.length);
        // console.log(`remainWord1:${remainWord}`);
        answer += word1.substring(minLength, word1.length);
    }    
    if (word2.length >minLength) {
        let remainWord = word2.substring(minLength);
        // console.log(`remainWord2:${remainWord}`);
        answer += word2.substring(minLength, word2.length);
    }    
    // console.log(`answer:${answer}`);
    return answer;
};