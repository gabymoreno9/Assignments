
function uniqueOccurrences(arr) {
    let counts = {}
    for (let i = 0; i < arr.length; i++){
        let key = arr[i]
        if(counts[key]) {
            counts[key]++
        }
        else {
            counts[key] = 1;
        }
    }

    let countValues = Object.values(counts);
    let countsSet = new Set(countValues)
    if (countsSet.size === countValues.length) {
        return true
    }
    else {
        return false
    }
};