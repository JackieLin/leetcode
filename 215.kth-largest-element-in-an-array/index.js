/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 *
 * 采用 堆 排序的算法建立一个 k 的最小堆, 大于继续构建
 * 
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (46.16%)
 * Total Accepted:    329.8K
 * Total Submissions: 714.6K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * Find the kth largest element in an unsorted array. Note that it is the kth
 * largest element in the sorted order, not the kth distinct element.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,1,5,6,4] and k = 2
 * Output: 5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,3,1,2,4,5,5,6] and k = 4
 * Output: 4
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var heap = []
    var length = nums.length;
    var temp;

    function minHeap(heap, i, len) {
        if (i >= len - 1) return;
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var temp;
        var small = i;

        if (left < len && heap[i] > heap[left]) {
            temp = heap[i];
            heap[i] = heap[left];
            heap[left] = temp;
            small = left
        }

        if (right < len && heap[i] > heap[right]) {
            temp = heap[i];
            heap[i] = heap[right];
            heap[right] = temp;
            small = right
        }

        if (small === i) return;

        minHeap(heap, small, len);
    }

    for(var i = 0; i < k; i++) {
        heap[i] = nums[i];
    }

    for(var i = parseInt(k / 2); i >= 0; i--) {
        minHeap(heap, i, k);
    }


    for(var i = k; i < length; i++) {
        if (heap[0] < nums[i]) {
            temp = heap[0];
            heap[0] = nums[i];
            nums[i] = temp;

            for(var j = parseInt(k / 2); j >= 0; j--) {
                minHeap(heap, j, k);
            }
        }
    }

    return heap[0]
};

