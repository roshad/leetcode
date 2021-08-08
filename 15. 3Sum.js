var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length,
    ret = [];
  for (let l = 0; l < len - 2; l++) {
    if (nums[l] === nums[l - 1]) continue;
    const sum = () => nums[l] + nums[m] + nums[r];
    for (let m = l + 1, r = len - 1; m < r; m++) {
      if (m > l + 1 && nums[m] == nums[m - 1]) continue;
      if (sum() < 0) continue;
      while (sum() > 0 && m < r - 1) r--;
      if (sum() == 0) ret.push([nums[l], nums[m], nums[r]]);
    }
  }
  return ret;
};
var threeSum = function (nums) {
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
        } while (nums[im] == nums[im - 1]); //放到for里，用continue替代
        do {
          ir--;
        } while (nums[ir] == nums[ir + 1]); //这里没必要这么麻烦，使中不同，已经避免了重复，不需要再使右不同
      } else if (sum < 0) {
        do {
          im++;
        } while (nums[im] == nums[im - 1]);
      } else if (sum > 0) {
        do {
          ir--;
        } while (nums[ir] == nums[ir + 1]); //do while 重复，放到for里
      }
    }
    do {
      il++;
    } while (nums[il] == nums[il - 1]);
  }
  return ret;
};
