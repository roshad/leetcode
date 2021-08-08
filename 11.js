var maxArea = function (height) {
  const len = height.length;
  let max = 0;
  for (let iL = 0, iR = len - 1, hL, hR; iL < iR; hL > hR ? iR-- : iL++) {
    (hL = height[iL]), (hR = height[iR]);
    max = Math.max(Math.min(hL, hR) * (iR - iL), max);
  }
  return max;
};
