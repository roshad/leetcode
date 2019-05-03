var missingNumber = function (nums) {
    for (let num = 0; num < nums.length; num++) if (nums.indexOf(num) === -1) return num
    return nums.length
};

var missingNumber = function (nums) {
    let r = nums.length
    for (let i = 0; i < nums.length; i++) r ^= i ^ nums[i]
    return r
};