/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0; // write position
    let i = 0;

    while (i < chars.length) {
        let current = chars[i];
        let count = 0;

        while(i < chars.length && chars[i] === current) {
            i++;
            count++;
        }

        // 문자 쓰기
        chars[index++] = current;

        // if count > 1, 숫자를 쓰기
        if (count > 1) {
            for (let c of count.toString()) {
                chars[index++] = c;
            }
        }
    }

    return index;
};