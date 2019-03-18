/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 *
 * https://leetcode.com/problems/top-k-frequent-words/description/
 *
 * algorithms
 * Medium (44.98%)
 * Total Accepted:    54.2K
 * Total Submissions: 120.5K
 * Testcase Example:  '["i", "love", "leetcode", "i", "love", "coding"]\n2'
 *
 * Given a non-empty list of words, return the k most frequent elements.
 * Your answer should be sorted by frequency from highest to lowest. If two
 * words have the same frequency, then the word with the lower alphabetical
 * order comes first.
 * 
 * Example 1:
 * 
 * Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
 * Output: ["i", "love"]
 * Explanation: "i" and "love" are the two most frequent words.
 * ⁠   Note that "i" comes before "love" due to a lower alphabetical order.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is",
 * "is"], k = 4
 * Output: ["the", "is", "sunny", "day"]
 * Explanation: "the", "is", "sunny" and "day" are the four most frequent
 * words,
 * ⁠   with the number of occurrence being 4, 3, 2 and 1 respectively.
 * 
 * 
 * 
 * Note:
 * 
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Input words contain only lowercase letters.
 * 
 * 
 * 
 * Follow up:
 * 
 * Try to solve it in O(n log k) time and O(n) extra space.
 * 
 * 
 */
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    var words = words.sort();
    var array = [];
    var result = [];
    var sum = 0;
    for(var i = 0; i < words.length; i++) {
        // 新词
        if (i !== 0 && words[i] !== words[i - 1]) {
            if (!array[sum]) array[sum] = [];
            array[sum].push(words[i - 1]);
            sum = 1;
            // 最后一个
            if (i >= words.length - 1) {
                if (!array[sum]) array[sum] = [];
                array[sum].push(words[i]);
            }
        } else if (i >= words.length - 1) {
            sum++;
            if (!array[sum]) array[sum] = [];
            array[sum].push(words[i]);
        } else {
            sum++;
        }
    }

    for(var i = array.length - 1; i >= 0; i--) {
        if (array[i]) {
            result = result.concat(array[i])
            if (result.length >= k) {
                result = result.slice(0, k);
                break;
            }    
        }
    }

    return result;
};

