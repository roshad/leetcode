var increasingTriplet = function (nums) {
  for (let i = 0, small = Infinity, mid = Infinity; i < nums.length; i++) {
    const cur = nums[i];
    if (cur <= small) small = cur;
    else if (cur <= mid) mid = cur;
    else return true;
  }
  return false;
};
//我写的
var increasingTriplet = function (nums) {
  for (let l, m, i = 0; i < nums.length; i++) {
    if (l === undefined || nums[i] < l) {//infinity避免去查und  =避免在之后比small
      l = nums[i];
    } else if (
      (m === undefined && nums[i] > l) ||
      (nums[i] < m && nums[i] > l)
    ) {
      m = nums[i];
    } else if (nums[i] > m) return true;
  }
  return false;
};
