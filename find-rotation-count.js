function findRotationCount(arr) {
    let lower = 0;
    let upper = arr.length - 1;
    while (true) {
        if (arr[upper] >= array[lower]) {
            return lower;
        }
        let mid = Math.floor((upper + lower) / 2);
        if (arr[lower] <= arr[mid]) {
            lower = mid + 1;
        } else {
            upper = mid;
        }
    }
}

module.exports = findRotationCount