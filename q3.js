function Join(arr, sep = ',') {
    if (arr.length === 0) {
        return '';
    }
    res = arr[0];
    for (i = 1; i < arr.length; i++) {
        res += sep + arr[i];
    }
    return res;
}

console.log(Join(["Hello", "Nazish", "Jahangir"], ' '));
console.log(Join(["Hello", "Nazish", "Jahangir"]));