/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 *
 * https://leetcode.com/problems/course-schedule/description/
 *
 * 注意，采用 dfs 的方式去解决
 * algorithms
 * Medium (36.98%)
 * Total Accepted:    194.8K
 * Total Submissions: 526.7K
 * Testcase Example:  '2\n[[1,0]]'
 *
 * There are a total of n courses you have to take, labeled from 0 to n-1.
 * 
 * Some courses may have prerequisites, for example to take course 0 you have
 * to first take course 1, which is expressed as a pair: [0,1]
 * 
 * Given the total number of courses and a list of prerequisite pairs, is it
 * possible for you to finish all courses?
 * 
 * Example 1:
 * 
 * 
 * Input: 2, [[1,0]] 
 * Output: true
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0. So it is possible.
 * 
 * Example 2:
 * 
 * 
 * Input: 2, [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0, and to take course 0 you
 * should
 * also have finished course 1. So it is impossible.
 * 
 * 
 * Note:
 * 
 * 
 * The input prerequisites is a graph represented by a list of edges, not
 * adjacency matrices. Read more about how a graph is represented.
 * You may assume that there are no duplicate edges in the input
 * prerequisites.
 * 
 * 
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if (!numCourses) return true;
    var seeing = new Set();
    var seen = new Set();

    var preCourses = [...Array(numCourses)].map(r => []);

    for(var i = 0; i < prerequisites.length; i++) {
        preCourses[prerequisites[i][1]].push(prerequisites[i][0]);
    }

    // debugger;

    function dfs(course) {
        if (seeing.has(course)) return false;
        if (seen.has(course)) return true;

        seeing.add(course);

        for(var j = 0; j < preCourses[course].length; j++) {
            if (!dfs(preCourses[course][j])) return false;
        }

        seeing.delete(course);
        seen.add(course);

        return true;
    }

    for(var i = 0; i < preCourses.length; i++) {
        if (!dfs(i)) return false;
    }

    return true;
};

