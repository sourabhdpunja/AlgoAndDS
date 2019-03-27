/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 (capacity) );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.dummyHead = new DLLNode(0, 0)
    this.dummyTail = new DLLNode(0, 0)
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
    this.capacity = capacity
    this.map = {}
    this.count = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map[key]){
        let tempNode = this.map[key]
        this.deleteNodeFromDLL(tempNode)
        this.addNodeToDLL(tempNode)
        return tempNode.value
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map[key]){
        let node = this.map[key]
        this.deleteNodeFromDLL(node);
        node.value = value
        this.addNodeToDLL(node)
    } else {
        var node = new DLLNode(key, value)
        this.map[key] = node
        if (this.count < this.capacity){
            this.count++
            this.addNodeToDLL(node)
        } else {
            delete this.map[this.dummyTail.prev.key]
            this.deleteNodeFromDLL(this.dummyTail.prev);
            this.addNodeToDLL(node)
        }
    }
};

LRUCache.prototype.deleteNodeFromDLL = function(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
}

LRUCache.prototype.addNodeToDLL = function(node) {
    node.next = this.dummyHead.next
    node.prev = this.dummyHead
    this.dummyHead.next = node
    node.next.prev = node
}


class DLLNode {
    constructor(key, value){
        this.value = value
        this.key = key
        this.next = null
        this.prev = null
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */