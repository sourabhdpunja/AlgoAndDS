/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Example:

MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
*/

/**
 * Initialize your data structure here.
 * @param {number} size
 */
class MovingAverage {
    constructor(size) {
        this.size = size
        this.queue = []
        this.sum = 0
    }

    /** 
     * @param {number} val
     * @return {number}
     */
    next(val) {
        if (this.queue.length == this.size) {
            this.sum -= this.queue.shift()
        }
        this.queue.push(val)
        this.sum += val
        return this.sum / this.queue.length
    }
};
