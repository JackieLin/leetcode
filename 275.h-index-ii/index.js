/*
 * @lc app=leetcode id=275 lang=javascript
 *
 * [275] H-Index II
 *
 * https://leetcode.com/problems/h-index-ii/description/
 *
 * algorithms
 * Medium (35.32%)
 * Total Accepted:    77.7K
 * Total Submissions: 220.1K
 * Testcase Example:  '[0,1,3,5,6]'
 *
 * Given an array of citations sorted in ascending order (each citation is a
 * non-negative integer) of a researcher, write a function to compute the
 * researcher's h-index.
 * 
 * According to the definition of h-index on Wikipedia: "A scientist has index
 * h if h of his/her N papers have at least h citations each, and the other N −
 * h papers have no more than h citations each."
 * 
 * Example:
 * 
 * 
 * Input: citations = [0,1,3,5,6]
 * Output: 3 
 * Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each
 * of them had 
 * ⁠            received 0, 1, 3, 5, 6 citations respectively. 
 * Since the researcher has 3 papers with at least 3 citations each and the
 * remaining 
 * two with no more than 3 citations each, her h-index is 3.
 * 
 * Note:
 * 
 * If there are several possible values for h, the maximum one is taken as the
 * h-index.
 * 
 * Follow up:
 * 
 * 
 * This is a follow up problem to H-Index, where citations is now guaranteed to
 * be sorted in ascending order.
 * Could you solve it in logarithmic time complexity?
 * 
 * 
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var left = 0;
    var length = citations.length;
    var right = length - 1;

    if (!citations.length) return 0;
    if (citations[right] < 1) return 0;

    // debugger;
    while(right > left) {
        var mid = Math.floor((left + right) / 2);
        var dis = length - mid;
        if (dis === citations[mid]) {
            right = mid;
            break;
        } else if (dis < citations[mid]) {
            right = mid;
        } else if (dis > citations[mid]) {
            left = mid + 1;
        }
    }

    return length - right;
};

