
//1
var longestCommonPrefix = function(strs) {
  if (strs == false) return "";

  let pre = "";
  for (let i = 0; i < strs[0].length; i++) {
    const cur_cha = strs[0][i];
    for (let i2 = 1; i2 < strs.length; i2++)
      if (strs[i2][i] !== cur_cha) return pre;
    pre += cur_cha;
  }
  return pre;
};
//2
var longestCommonPrefix = function(strs) {
    strs.sort((a, b) => a.length - b.length);
  
    let prefix = strs.length ? strs[0] : "";
    let i = 1;
  
    while (prefix && i < strs.length) {
      const next = strs[i];
      while (next.indexOf(prefix) !== 0) prefix.splice(-1,1);
  
      i++;
    }
    return prefix;
  };