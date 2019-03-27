/*
347. Top K Frequent Elements
Medium

1223

81

Favorite

Share
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Using Bucket Sort to sort the numbers
var topKFrequent = function(nums, k) {
  let frequencyMap = {}
  for (let num of nums){
      frequencyMap[num] = frequencyMap[num] + 1 || 1
  }
  let bucket = []
  for (i = 0; i< nums.length+1; i++){
      bucket[i] = []
  }
  
  Object.keys(frequencyMap).map(entry => {
     bucket[frequencyMap[entry]].push(entry)
  });
  
  let result = []
  for (let i = bucket.length - 1; i >= 0; i--){
      if (bucket[i].length !== 0){
          result.push(...bucket[i])
      }
  }
  
  return result.slice(0, k)
};

// O(nlogn)Time O(n) Space Complexity
 var topKFrequent = function(nums, k) {
    let frequencyMap = {}
    for (let num of nums){
        frequencyMap[num] = frequencyMap[num] + 1 || 1
    }
    let sortedMap = Object.keys(frequencyMap).map(entry => [entry, frequencyMap[entry]]).sort((a, b) => b[1] - a[1])
  let result =   sortedMap.slice(0, k).map(entry => entry[0])
  return result
};

