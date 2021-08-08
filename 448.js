//1 loop 对应位置+len 2.loop 数<=len，说明没有被操作过，在arr里不存在
// 官解说返回值不计入额外空间，这说法没听过
// arr.entries()key 的type是数
var findDisappearedNumbers = function (nums) {
  const len = nums.length,
    ret = [];
  for (let num of nums) nums[(num % mod) - 1] += len; //len是最大数，任何数+len都会>最大数，所以可以+len

  nums.forEach((num, ind) => {
    if (num < mod) ret.push(ind + 1);
  });

  return ret;
};
