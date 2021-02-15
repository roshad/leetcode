//1.2
var lengthOfLongestSubstring = function (s) {
  const mem = {};
  let max = 0;
  for (indL = 0, indR = 0; indR < s.length; indR++) {
    const cha = s[indR];
    indL = Math.max(mem[cha] + 1 || 0, indL);
    max = Math.max(max, indR - indL + 1);
    mem[cha] = indR;
  }
  return max;
};

var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  if (s.length == 1) return 1;
  var startIndex = 0;
  var maxLen = 0;
  var arr = new Array(256);
  arr.fill(-1);

  for (var i = 0; i < s.length; i++) {
    var index = arr[s[i].charCodeAt()];
    if (index != -1 && index >= startIndex) {
      var len = i - startIndex;
      if (len > maxLen) maxLen = len;
      // 重新标记起始下标
      startIndex = index + 1;
    }
    arr[s[i].charCodeAt()] = i;
  }
  if (maxLen < s.length - startIndex) maxLen = s.length - startIndex;

  return maxLen;
};

var lengthOfLongestSubstring = function(s) {
  const chaIndMap={}
  let maxLen=0
  for (let i=0,sta=0;i<s.length;i++){
      let preInd=chaIndMap[s[i]]
      if (preInd!==undefined){
          sta=sta>preInd?sta:preInd+1
      }
      if (maxLen<i-sta+1)maxLen=i-sta+1
      
      chaIndMap[s[i]]=i
  }
  return maxLen
};
//需要一个个去移除重合字符之前的，比较麻烦