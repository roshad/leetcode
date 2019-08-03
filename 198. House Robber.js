var rob = function(nums) {
    const len = nums.length;

    for (let ind = 2; ind < len; ind++)
        nums[ind] += Math.max(nums[ind - 2], nums[ind - 3] || 0);

    return Math.max(nums[len - 1] || 0, nums[len - 2] || 0);
};


