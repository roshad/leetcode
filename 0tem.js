var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let ret = [],
        len = nums.length;
    for (let il = 0; il < len - 2; il++) {
        for (im = il+1, ir = len - 1;im<ir ; ) {
            let sum = nums[il] + nums[im] + nums[ir];
            if (sum == 0) {
                ret.push([nums[il], nums[im], nums[ir]]);
                while (nums[im] == nums[im - 1]) im++;
                while (nums[ir] == nums[ir + 1]) ir--;
            } else if (sum < 0) while (nums[im] == nums[im - 1]) im++;
            else if (sum > 0) while (nums[ir] == nums[ir + 1]) ir--;
        }
    }
    return ret
};
