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

        // write char
        chars[index++] = current;

        // if count > 1, write digits
        if (count > 1) {
            for (let c of count.toString()) {
                chars[index++] = c;
            }
        }
    }

    return index;
};