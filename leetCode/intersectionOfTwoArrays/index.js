/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// My Submission
var intersect = function(nums1, nums2) {
    smallNumsMap = {}
    let small = []
    let large = []
    let result = []
    if (nums1.length > nums2.length) {
        small = nums2
        large = nums1
    } else {
        small = nums1
        large = nums2
    }
    
    for (let num of small){
        if (smallNumsMap[num] === undefined){
            smallNumsMap[num] = 1
        } else {
            smallNumsMap[num]++
        }
    }

    for (let num of large){
        if (smallNumsMap[num] > 0){
            result.push(num)
            smallNumsMap[num]--
        } 
    }
    return result
};


//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// optimal solution
var buildMap = function(map,nums){
    nums.forEach(function(elem){
        if(map.has(elem)){
            map.set(elem,map.get(elem) + 1);
        }else
            map.set(elem,1);
    });
}

var searchMap = function(ans,map,nums){
    nums.forEach(function(elem){
        if(map.has(elem) && map.get(elem) > 0){
            ans.push(elem);
            map.set(elem,map.get(elem)-1);
        }
    });
}
var intersect = function(nums1, nums2) {
     var map=new Map();
    var ans=[];
    if(nums1.length>nums2.length){
        buildMap(map,nums1);
        searchMap(ans,map,nums2);
    }
    else{
        buildMap(map,nums2);
        searchMap(ans,map,nums1);
    }
   
    return ans;
    
};
