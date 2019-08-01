//三指针操作
//使一变化只能以一针的变化实现

function threeSum(nums) {
    nums.sort((a, b) => a - b);

    const len = nums.length,
        ret = [];

    for (let il = 0, im = il + 1, ir = len - 1; il < len - 2, im < ir; ) {
        const sum = nums[il] + nums[im] + nums[ir];

        if (sum == 0) {
            ret.push([nums[il], nums[im], nums[ir]]);
            do {
                im++;
            } while (nums[im] === nums[im - 1]);
            do {
                ir--;
            } while (nums[ir] === nums[ir + 1]);
        } else if (sum < 0) {
            do {
                im++;
            } while (nums[im] === nums[im - 1]);
        } else if (sum > 0) {
            do {
                ir--;
            } while (nums[ir] === nums[ir + 1]);
        }

        if (im >= ir) {
            do {
                il++;
            } while (nums[il] === nums[il - 1]);
            if (nums[il] > 0) return ret;
            im = il + 1;
            ir = len - 1;
        }
    }
    return ret;
}
