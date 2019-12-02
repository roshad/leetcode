var increasingTriplet = function(nums) {
  for (let i = 0, small = Infinity, mid = Infinity; i < nums.length; i++) {
    const cur_num = nums[i];
    if (cur_num <= small) small = cur_num;
    else if (cur_num <= mid) mid = cur_num;
    else return true;
  }
  return false;
};
