//三指针操作
//使一变化只能以一针的变化实现
var threeSum = function(nums) {
    if (nums.length < 3) return [];
    nums.sort((a, b) => a - b);
    let ret = [],
        len = nums.length;
    for (let il = 0; il < len - 2; ) {
        if (nums[i] > 0) return ret;
        for (let im = il + 1, ir = len - 1; im < ir; ) {
            let sum = nums[il] + nums[im] + nums[ir];
            if (sum == 0) {
                ret.push([nums[il], nums[im], nums[ir]]);
                do {
                    im++;
                } while (nums[im] == nums[im - 1]);
                do {
                    ir--;
                } while (nums[ir] == nums[ir + 1]);
            } else if (sum < 0)
                do {
                    im++;
                } while (nums[im] == nums[im - 1]);
            else if (sum > 0)
                do {
                    ir--;
                } while (nums[ir] == nums[ir + 1]);
        }
        do {
            il++;
        } while (nums[il] == nums[il - 1]);
    }
    return ret;
};
