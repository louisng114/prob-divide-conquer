function findRotatedIndex(arr, num) {
    let lower = 0;
    let upper = arr.length - 1;
    while (upper > lower) {
        let mid = Math.floor((upper + lower) / 2);
        if (arr[mid] === num) {
            return mid;
        } else if (arr[mid] < num) {
            if (arr[upper] < num) {
                upper = mid - 1;
            } else {
                lower = mid + 1;
            }
        } else {
            if (arr[lower] > num) {
                lower = mid + 1;
            } else {
                upper = mid - 1;
            }
        }
    }
    return -1;
}

module.exports = findRotatedIndex