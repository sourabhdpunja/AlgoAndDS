/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
*/
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let startTimes = []
    let endTimes = []
    for (let interval of intervals) {
        startTimes.push(interval.start)
        endTimes.push(interval.end)
    }
    startTimes.sort((a, b) => a-b)
    endTimes.sort((a, b) => a-b)
    
    let startPointer = 0
    let endPointer = 0
    
    let numberOfMeetingRoom = 0
    let minMeetingRoom = 0
    while(startPointer < startTimes.length){
        if (startTimes[startPointer] < endTimes[endPointer]){
            numberOfMeetingRoom++
            startPointer++
            minMeetingRoom = Math.max(minMeetingRoom, numberOfMeetingRoom)
        } else {
            endPointer++
            numberOfMeetingRoom--
        }
    } 
    return minMeetingRoom
};