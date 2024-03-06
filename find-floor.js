function findFloor(arr, num) {
    let lower = 0;
    let upper = arr.length - 1;
    while (upper > lower) {
        let mid = Math.floor((upper + lower) / 2);
        if (arr[mid] > num) {
            upper = mid - 1;
        } else {
            lower = mid;
        }
    if (arr[upper] <= num) {
        return arr[upper];
    } else {
        return -1;
    }
}

module.exports = findFloor