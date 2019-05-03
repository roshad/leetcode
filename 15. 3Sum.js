var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let ret = [],
    len = nums.length;
  for (let is = 0; is < len; is++) {
    if (nums[is] > 0) return ret;
    while (nums[is] === nums[is - 1]) is++;
    for (let im = is + 1, ib = len - 1; im < ib; ) {
      let sum = nums[is] + nums[im] + nums[ib];
      if (sum === 0) {
        ret.push([nums[is], nums[im], nums[ib]]);
        do {
          im++;
        } while (nums[im] === nums[im - 1]);
        do {
          ib--;
        } while (nums[ib] === nums[ib + 1]);
      } else if (sum > 0) ib--;
      else im++;
      //console.log(ret)
    }
  }
  return ret;
};
