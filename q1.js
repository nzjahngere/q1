function cust(arr, findele, ind = arr.length - 1) {
    if (ind >= arr.length) {
      ind = arr.length - 1;
    }
    if (ind < 0) {
      ind = arr.length + ind;
    }
    for (i = ind; i >= 0; i--) {
      if (arr[i] === findele) {
        return i;
      }
    }
    return -1;
  }
  
  console.log(cust([1, 2, 3, 4, 3, 2, 1], 2));
  console.log(cust([1, 2, 3, 4, 3, 2, 1], 5));
  console.log(cust([1, 2, 3, 4, 3, 2, 1], 3, 3));