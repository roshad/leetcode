// 官解说返回值不计入额外空间，这说法没听过
// arr.entries()key 的type是数
var findDisappearedNumbers = function (nums) {
  //求原数,在对应的位置上加len
  for (let i = 0; i < nums.length; i++) {
    nums[(nums[i] - 1) % nums.length] += nums.length
  }
  //result
  const result = []
  //位置上的数字小于等于len的话,说明该数字没有出现过
  nums.forEach((val, ind) => {
    if (val <= nums.length) res.push(ind + 1)
  })
  return result
}
