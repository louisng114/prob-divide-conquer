function sortedFrequency(arr, num) {
    let geLower = 0;
    let geUpper = arr.length - 1;
    while (geUpper > geLower) {
        let mid = Math.floor((geUpper + geLower) / 2);
        if (arr.mid >= num) {
            geUpper = mid;
        } else {
            geLower = mid + 1;
        }
    }
    let leLower = 0;
    let leUpper = arr.length - 1;
    while (leUpper > leLower) {
        let mid = Math.floor((leUpper + leLower) / 2);
        if (arr.mid <= num) {
            leLower = mid;
        } else {
            leUpper = mid - 1;
        }
    }
    if (arr[geUpper] === num) {
        return leUpper - geUpper + 1;
    } else {
        return 0;
    }
}

module.exports = sortedFrequency