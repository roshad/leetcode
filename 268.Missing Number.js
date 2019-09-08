var missingNumber = function (nums) {
    for (let num = 0; num < nums.length; num++) if (nums.indexOf(num) === -1) return num
    return nums.length
};

var missingNumber = function (nums) {
    let r = nums.length
    for (let i in nums) r ^= i ^ nums[i]
    return r
};