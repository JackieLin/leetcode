/*
 * @lc app=leetcode id=460 lang=javascript
 *
 * [460] LFU Cache
 *
 * https://leetcode.com/problems/lfu-cache/description/
 *
 * algorithms
 * Hard (28.25%)
 * Total Accepted:    36.3K
 * Total Submissions: 128.3K
 * Testcase Example:  '["LFUCache","put","put","get","put","get","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]'
 *
 * Design and implement a data structure for Least Frequently Used (LFU) cache.
 * It should support the following operations: get and put.
 * 
 * 
 * 
 * get(key) - Get the value (will always be positive) of the key if the key
 * exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present.
 * When the cache reaches its capacity, it should invalidate the least
 * frequently used item before inserting a new item. For the purpose of this
 * problem, when there is a tie (i.e., two or more keys that have the same
 * frequency), the least recently used key would be evicted.
 * 
 * 
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 * 
 * Example:
 * 
 * LFUCache cache = new LFUCache( 2 /* capacity */ );
 * 
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // returns 1
 * cache.put(3, 3);    // evicts key 2
 * cache.get(2);       // returns -1 (not found)
 * cache.get(3);       // returns 3.
 * cache.put(4, 4);    // evicts key 1.
 * cache.get(1);       // returns -1 (not found)
 * cache.get(3);       // returns 3
 * cache.get(4);       // returns 4
 * 
 * 
 */
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.size = capacity;
    this.length = 0;
    this.map = {};
    this.relations = [];    
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (!this.map[key] || !this.size) return -1;
    var count = this.map[key].count;

    this.relations[count].delete(key);
    if (!this.relations[count + 1]) {
        this.relations[count + 1] = new Map();
    }

    this.relations[count + 1].set(key, true);

    this.map[key].count = count + 1;
    return this.map[key].value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (!this.size) return;
    if (this.length < this.size || this.map[key]) {
        if (!this.map[key]) {
            this.length++;
        }

        var count = this.map[key] ? this.map[key].count + 1 : 0;

        this.map[key] = {
            value,count
        }
        if (!this.relations[count]) {
            this.relations[count] = new Map();
        }
        if (this.relations[count - 1]) {
            this.relations[count - 1].delete(key);
        }
        this.relations[count].set(key, true);
    } else {
        for(var i = 0; i < this.relations.length; i++) {
            if (this.relations[i] && this.relations[i].size) {
                var keys = this.relations[i].keys();
                var keyItem = keys.next().value
                this.relations[i].delete(keyItem);
                delete this.map[keyItem];
                break;
            }
        }

        // 新增
        this.map[key] = {
            value,
            count: 0
        }

        if (!this.relations[0]) {
            this.relations[0] = new Map();
        }
        this.relations[0].set(key, true);

        // console.log(key)
        // console.log(this.relations);
        // console.log(this.map);
        // console.log('====')
    }
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = Object.create(LFUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

