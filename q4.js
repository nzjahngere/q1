function substr(str, start, end) {
    start = start || 0;
    end = end === undefined ? str.length : end;
    start = Math.max(0, start);
    end = Math.max(0, end);
    
    if (start > end) {
        temp = start;
        start = end;
        end = temp;
    }
    res = '';
    for (i = start; i < end && i < str.length; i++) {
        res += str[i];
    }
    return res;
}

console.log(substr("Nazish Jahangir", 7, 12));
console.log(substr("Nazish Jahangir", 0, 5));
console.log(substr("Nazish Jahangir", 7));
