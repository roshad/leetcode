var majorityElement = function (nums) {
    let major = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        major === nums[i]? count++:count--
        
        if (count === 0) {
            major = nums[i];
            count = 1;
        }
    }
    return major;
}