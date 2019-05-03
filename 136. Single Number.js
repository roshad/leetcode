//复杂度是一样的
var singleNumber = (nums) => nums.reduce((a,b) => a ^ b)