/*
 * @lc app=leetcode id=274 lang=javascript
 *
 * [274] H-Index
 *
 * https://leetcode.com/problems/h-index/description/
 *
 * algorithms
 * Medium (34.46%)
 * Total Accepted:    119.1K
 * Total Submissions: 345.5K
 * Testcase Example:  '[3,0,6,1,5]'
 *
 * Given an array of citations (each citation is a non-negative integer) of a
 * researcher, write a function to compute the researcher's h-index.
 * 
 * According to the definition of h-index on Wikipedia: "A scientist has index
 * h if h of his/her N papers have at least h citations each, and the other N −
 * h papers have no more than h citations each."
 * 
 * Example:
 * 
 * 
 * Input: citations = [3,0,6,1,5]
 * Output: 3 
 * Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each
 * of them had 
 * ⁠            received 3, 0, 6, 1, 5 citations respectively. 
 * Since the researcher has 3 papers with at least 3 citations each and the
 * remaining 
 * two with no more than 3 citations each, her h-index is 3.
 * 
 * Note: If there are several possible values for h, the maximum one is taken
 * as the h-index.
 * 
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if (!citations.length) return 0;
    citations = citations.sort((a,b) => a - b);
    var max;
    var length = citations.length;

    for(var i = length - 1; i > 0; i--) {
        if (length - i >= citations[i - 1] && length - i <= citations[i]) {
            max = length - i;
            break;
        }
    }

    if (max === undefined) {
        var citation = citations[0];
        for(var i = citation; i >= 0; i--) {
            if (i <= length) {
                max = i;
                break;
            }
        }
    }

    max = max || 0;

    return max;
};

