

var countBits = function(n) {
  const bits = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
      bits[i] = bits[i & (i - 1)] + 1;//等于去掉个1后的数 的量+1.
  }
  return bits;
};
