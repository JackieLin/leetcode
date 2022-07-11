function buildHeap(arr) {
  const len = arr.length;
  for(let i = len - 1; i >= 2; i--) {
    let parent = parseInt((i - 1) / 2);
    let left = parent * 2 + 1;
    let right = parent * 2 + 2;
    console.log(parent, left, right, arr[parent], arr[left], arr[right]);
    if (arr[left] < arr[parent]) {
      let t = arr[parent];
      arr[parent] = arr[left];
      arr[left] = t;
    }

    if (arr[right] < arr[parent]) {
      let t = arr[parent];
      arr[parent] = arr[right];
      arr[right] = t;
    }
  }
  return arr;
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  const arr = buildHeap(arr);
  
};

getLeastNumbers([4, 5, 1, 6, 2, 7, 3, 8])