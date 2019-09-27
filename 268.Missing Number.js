var missingNumber = function(nums) {
    for (let num = 0; num < nums.length; num++)
        if (nums.indexOf(num) === -1) return num;
    return nums.length;
};
//^法
var missingNumber = function(nums) {
    return nums.reduce((pre, cur, ind) => pre ^ cur ^ ind, nums.length);
};
