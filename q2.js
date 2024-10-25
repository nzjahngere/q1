function slice(arr, start = 0, end = arr.length) {
    res = [];
    if (start < 0) {
      start = arr.length + start;
    }
    if (end < 0) {
      end = arr.length + end;
    }
    start = Math.max(0, start);
    end = Math.min(arr.length, end);
    
    for (i = start; i < end; i++) {
      res.push(arr[i]);
    }
    
    return res;
  }
  
  console.log(slice([1, 2, 3, 4, 5, 6], 1, 4))
  console.log(slice([1, 2, 3, 4, 5, 6], -4, -1))
  console.log(slice([1, 2, 3, 4, 5, 6]))