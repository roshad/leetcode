var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const ret = [];
  for (let il = 0; il < nums.length - 2; ) {
    for (let im = il + 1, ir = nums.length - 1; im < ir; ) {
      if (nums[il] + nums[im] > 0) break;
      const sum = nums[il] + nums[im] + nums[ir];
      if (sum == 0) {
        ret.push([nums[il], nums[im], nums[ir]]);
        do {
          im++;
        } while (nums[im] == nums[im - 1]);
        do {
          ir--;
        } while (nums[ir] == nums[ir + 1]);
      } else if (sum < 0) {
        do {
          im++;
        } while (nums[im] == nums[im - 1]);
      } else if (sum > 0) {
        do {
          ir--;
        } while (nums[ir] == nums[ir + 1]);
      }
    }
    do {
      il++;
    } while (nums[il] == nums[il - 1]);
  }
  return ret;
};
