function countZeroes(arr) {
    let lower = 0;
    let upper = arr.length - 1;
    while (upper > lower) {
        let mid = Math.floor((upper + lower) / 2);
        if (arr.mid === 0) {
            upper = mid;
        } else {
            lower = mid + 1;
        }
    }
    if (arr[upper] === 0) {
        return arr.length - upper;
    } else {
        return 0;
    }
}

module.exports = countZeroes