/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    /*
        시나리오는 좌우에 0인 칸만 체크하면 됨.
    */
    let plantedPos = 0;
    for (let i =0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) continue;
        let isPossible = true;        
        if (i-1 >= 0 ) {
            // 1.check left and right
            if (flowerbed[i-1] !== 0) {
                isPossible = false;
            }
        }
        if (i+1 < flowerbed.length) {
            if (flowerbed[i+1] !== 0) {
                isPossible = false;
            }
        }
        if (isPossible) {
            plantedPos++;
            console.log(`isPossible[${i}]`);
            flowerbed[i] = 1;
        }    
    }
    console.log(`plantedPos::${plantedPos}`);
    return plantedPos >= n ? true : false;
};