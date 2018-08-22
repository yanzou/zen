/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var result = [];

  nums.some((num, idx) => {
    var secondIdx = nums.indexOf(target - num);
    var found = secondIdx > -1 && secondIdx !== idx;

    if (found) {
      result = [idx, secondIdx];
    }

    return found;
  });
  
  return result.sort();
};


var twoSum = function(nums, target) {
  const result = [];
  const len = nums.length;

  for (let idx = 0; idx < len; idx++) {
    for (let secondIdx = idx+1; secondIdx < len; secondIdx++) {
      if (nums[idx] + nums[secondIdx] === target) {
        return [idx, secondIdx];
      }
    }
  };
  
  return result;
};

var twoSum = function(nums, target) {
  const result = [];
  const len = nums.length;

  for (let idx = 0; idx < len; idx++) {
    let current = nums[idx];
    let secondIdx = nums.findIndex((num, j) => j !== idx && current + num === target);

    if (secondIdx > -1) {
      return [idx, secondIdx];
    }
  };
  
  return result;
};

console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([1, 2, 4, 7, 18, 22, 6], 24));