/*
 * @lc app=leetcode id=675 lang=javascript
 *
 * [675] Cut Off Trees for Golf Event
 *
 * https://leetcode.com/problems/cut-off-trees-for-golf-event/description/
 *
 * algorithms
 * Hard (30.49%)
 * Total Accepted:    13.1K
 * Total Submissions: 42.9K
 * Testcase Example:  '[[1,2,3],[0,0,4],[7,6,5]]'
 *
 * You are asked to cut off trees in a forest for a golf event. The forest is
 * represented as a non-negative 2D map, in this map:
 * 
 * 
 * 0 represents the obstacle can't be reached.
 * 1 represents the ground can be walked through.
 * The place with number bigger than 1 represents a tree can be walked through,
 * and this positive number represents the tree's height.
 * 
 * 
 * 
 * 
 * You are asked to cut off all the trees in this forest in the order of tree's
 * height - always cut off the tree with lowest height first. And after
 * cutting, the original place has the tree will become a grass (value 1).
 * 
 * You will start from the point (0, 0) and you should output the minimum steps
 * you need to walk to cut off all the trees. If you can't cut off all the
 * trees, output -1 in that situation.
 * 
 * You are guaranteed that no two trees have the same height and there is at
 * least one tree needs to be cut off.
 * 
 * Example 1:
 * 
 * 
 * Input: 
 * [
 * ⁠[1,2,3],
 * ⁠[0,0,4],
 * ⁠[7,6,5]
 * ]
 * Output: 6
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 
 * [
 * ⁠[1,2,3],
 * ⁠[0,0,0],
 * ⁠[7,6,5]
 * ]
 * Output: -1
 * 
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 
 * [
 * ⁠[2,3,4],
 * ⁠[0,0,5],
 * ⁠[8,7,6]
 * ]
 * Output: 6
 * Explanation: You started from the point (0,0) and you can cut off the tree
 * in (0,0) directly without walking.
 * 
 * 
 * 
 * 
 * Hint: size of the given matrix will not exceed 50x50.
 * 
 * cutOffTree([[1,2,3],[0,0,4],[7,6,5]])
    cutOffTree([[1,2,3], [0,0,0], [7,6,5]])
    cutOffTree([[2,3,4], [0,0,5], [8,7,6]])
 */
/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
    var row = forest.length;
    if (!row) return 0;
    var col = forest[0].length;
    if (!col) return 0;
    var trees = [];
    var queue = [];
    var min = 0;

    for(var i = 0; i < row; i++) {
        for(var j = 0; j < col; j++) {
            if (forest[i][j] > 1) {
                trees.push(forest[i][j]);
            }
        }
    }

    // debugger;

    trees = trees.sort((a, b) => a - b);
    i = j = 0
    var prevLength = 0;
    var seen = [];

    while(trees.length) {
        queue = [{
            i,
            j,
            level: 0
        }];

        // 死路
        if (prevLength === trees.length) {
            return -1;
        }

        prevLength = trees.length;

        for(var k = 0; k < row; k++) {
            seen[k] = [];
            for(var t = 0; t < col; t++) {
                seen[k][t] = false;
            }
        }

        seen[i][j] = true;

        while(queue.length) {
            var item = queue.shift();
            i = item.i;
            j = item.j;
            var level = item.level;

            if (!forest[i][j]) continue;

            if (forest[i][j] === trees[0]) {
                trees.shift();
                forest[i][j] = 1;
                break;
            }

            // 上
            if (i > 0 && forest[i-1][j]) {
                // 找到
                if (forest[i-1][j] === trees[0]) {
                    forest[i-1][j] = 1;
                    min += level + 1;
                    i = i - 1;
                    trees.shift()
                    break;
                } else if(!seen[i - 1][j]) {
                    seen[i - 1][j] = true;
                    queue.push({
                        i: i - 1,
                        j,
                        level: level + 1
                    })    
                }
            }

            // 右
            if (j + 1 < col && forest[i][j + 1]) {
                // 找到
                if (forest[i][j + 1] === trees[0]) {
                    forest[i][j + 1] = 1;
                    min += level + 1;
                    j = j + 1;
                    trees.shift()
                    break;
                } else if(!seen[i][j + 1]) {
                    seen[i][j + 1] = true;
                    queue.push({
                        i: i,
                        j: j + 1,
                        level: level + 1
                    })    
                }
            }

            // 下
            if (i + 1 < row && forest[i + 1][j]) {
                // 找到
                if (forest[i + 1][j] === trees[0]) {
                    forest[i + 1][j] = 1;
                    min += level + 1;
                    i = i + 1;
                    trees.shift()
                    break;
                } else if (!seen[i + 1][j]) {
                    seen[i + 1][j] = true;
                    queue.push({
                        i: i + 1,
                        j,
                        level: level + 1
                    })    
                }
            }

            // 左
            if (j > 0 && forest[i][j - 1]) {
                // 找到
                if (forest[i][j - 1] === trees[0]) {
                    forest[i][j - 1] = 1;
                    min += level + 1;
                    j = j - 1;
                    trees.shift()
                    break;
                } else if (!seen[i][j - 1]){
                    seen[i][j - 1] = true;
                    queue.push({
                        i,
                        j: j - 1,
                        level: level + 1
                    })    
                }
            }
        }
    }

    return min
};

