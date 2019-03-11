/*
 * @lc app=leetcode id=355 lang=javascript
 *
 * [355] Design Twitter
 *
 * https://leetcode.com/problems/design-twitter/description/
 *
 * algorithms
 * Medium (26.93%)
 * Total Accepted:    32.3K
 * Total Submissions: 119.8K
 * Testcase Example:  '["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"]\n[[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]'
 *
 * Design a simplified version of Twitter where users can post tweets,
 * follow/unfollow another user and is able to see the 10 most recent tweets in
 * the user's news feed. Your design should support the following methods:
 * 
 * 
 * 
 * postTweet(userId, tweetId): Compose a new tweet.
 * getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's
 * news feed. Each item in the news feed must be posted by users who the user
 * followed or by the user herself. Tweets must be ordered from most recent to
 * least recent.
 * follow(followerId, followeeId): Follower follows a followee.
 * unfollow(followerId, followeeId): Follower unfollows a followee.
 * 
 * 
 * 
 * Example:
 * 
 * Twitter twitter = new Twitter();
 * 
 * // User 1 posts a new tweet (id = 5).
 * twitter.postTweet(1, 5);
 * 
 * // User 1's news feed should return a list with 1 tweet id -> [5].
 * twitter.getNewsFeed(1);
 * 
 * // User 1 follows user 2.
 * twitter.follow(1, 2);
 * 
 * // User 2 posts a new tweet (id = 6).
 * twitter.postTweet(2, 6);
 * 
 * // User 1's news feed should return a list with 2 tweet ids -> [6, 5].
 * // Tweet id 6 should precede tweet id 5 because it is posted after tweet id
 * 5.
 * twitter.getNewsFeed(1);
 * 
 * // User 1 unfollows user 2.
 * twitter.unfollow(1, 2);
 * 
 * // User 1's news feed should return a list with 1 tweet id -> [5],
 * // since user 1 is no longer following user 2.
 * twitter.getNewsFeed(1);
 * 
 * 
 */
/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    // 栈
    this.twitters = []
    this.relations = {};
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.twitters.push({
        userId,
        tweetId
    })
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    var relation = this.relations[userId];
    var map = {};
    var result = []
    map[userId] = true;
    
    if (relation) {
        for(var i = 0; i < relation.length; i++) {
            map[relation[i]] = true;
        }
    }

    for(var i = this.twitters.length - 1; i >= 0; i--) {
        if (map[this.twitters[i].userId]) {
            result.push(this.twitters[i].tweetId)
        }

        if (result.length >= 10) break;
    }

    return result;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.relations[followerId]) {
        this.relations[followerId] = []
    }

    this.relations[followerId].push(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (!this.relations[followerId]) return;
    var result = []
    var relation = this.relations[followerId];
    for(var i = 0; i < relation.length; i++) {
        if (relation[i] !== followeeId) {
            result.push(relation[i]);
        }
    }

    this.relations[followerId] = result
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = Object.create(Twitter).createNew()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

