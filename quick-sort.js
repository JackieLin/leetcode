function quickSort(arr) {
  let start = 0;
  if (!arr.length) return [];
  for(let i = 1; i < arr.length; i++) {
    if (arr[start] > arr[i]) {
      let t = arr[i];
      arr[i] = arr[start];
      arr[start] = t;
      start = i;
    }
  }    
  return [...quickSort(arr.slice(0, start)), arr[start], ...quickSort(arr.slice(start + 1))];
}

quickSort([8, 7,6,1,5,4,3,2])