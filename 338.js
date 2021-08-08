//当前数的1数，等于去掉1个1之后的数的量+1.
// 比当前数x比特位少1的数x&(x-1)
var countBits = function (n) {
  function getBits(n) {
    let ret = 0;
    while (n) {
      n &= n - 1;
      ret++;
    }
    return ret;
  }
  let ret = [];
  for (let i = 0; i <= n; i++) {
    ret.push(getBits(i));
  }
  return ret;
};
