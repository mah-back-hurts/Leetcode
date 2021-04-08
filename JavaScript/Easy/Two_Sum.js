// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// We could use two for loops to find the sum of the two arrays, but that would put our notation at O(n^2), which isn't that great
// Ideally, we would use a hash table to improve our optimization

var twoSum = function(nums, target) {
    const result = [];
    const hash = {};
    
    for (let index in nums) {
        const diff = target - nums[index];
        if (hash.hasOwnProperty(nums[index])) {
            result[0] =  parseInt(hash[nums[index]]);
            result[1] = parseInt(index);
        } else {
            hash[diff] = index;
        }
    }
    return result;
}
