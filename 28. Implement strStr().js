//sunday  最坏O(nm)
var strStr = function (haystack, needle) {
  const [hLen, nL] = [haystack.length, needle.length],
    move = {};
  for (let i = 0; i < nL; i++) move[needle[i]] = nL - i;
  //console.log(move)
  for (
    let nee_head_ind = 0;
    nee_head_ind <= hLen - nL;
    nee_head_ind += move[haystack[nee_head_ind + nL]] || nL + 1
  ) {
    for (nee_tra_i = 0; ; nee_tra_i++) {
      if (nee_tra_i == nL) return nee_head_ind;
      if (haystack[nee_tra_i + nee_head_ind] != needle[nee_tra_i]) break;
    }
  }
  return -1;
};
//Rabin Karp 
//worst case 
// 算hash，移动时去一个，来一个
//有哈希就会有碰撞，完事后比对str
//"bbbbbbbbbbbbbbbbbbbbbbbb"
//"bbbbbbbbbbbbbbbbbhzujtzz"

var strStr = function (haystack, needle) {
  const nL = needle.length,
    prime = 26,
    modulus = Math.pow(2, 31), //26是>25的最小素数，mod之后为何不会重复，证明不了
    chaToNum = (cha) => cha.charCodeAt(0) - "a".charCodeAt(0);

  if (nL > haystack.length) return -1; //无此会在第一个for就变成NaN，但一直计算下去
  let hash_needle = 0,
    hash_cur = 0,
    prevProcess = 1;
  for (let i = 0; i < needle.length; i++) {
    hash_needle = (hash_needle * prime + chaToNum(needle[i])) % modulus;
    hash_cur = (hash_cur * prime + chaToNum(haystack[i])) % modulus;
    prevProcess = (prevProcess * prime) % modulus; //减去第一个，乘了很多次的 | 第一次没有乘，但下面用到是多乘了一次的
  }
  if (hash_cur == hash_needle && haystack.slice(0, nL) == needle) return 0;
  for (let i = 1; i <= haystack.length - nL; i++) {
    hash_cur =
      (hash_cur * prime -
        chaToNum(haystack[i - 1]) * prevProcess +
        chaToNum(haystack[i + nL - 1])) %
      modulus;

    if (hash_cur == hash_needle && haystack.slice(i, i + nL) == needle)
      return i;
  }
  return -1;
};
// kmp
// 想象 h条与n条
//暴力 读头是需要回退的,kmp不需要. hay上有任何被读两次的,说明在nee上出现两次.
//kmp 已读部 头尾有相等,针条对齐到相等的位置
var strStr = function (haystack, needle) {
  const nL = needle.length, hL = haystack.length
  if (nL == 0) return 0
  const preSufEqLen = new Array(hL).fill(0) //相等的长度,同时也是回退后开始的ind
  for (let hI = 1, nI = 0; hI < nL; hI++) {//比对的部分,hay是尾,needle是头
    while (nI > 0 && needle[nI] !== needle[hI]) nI = preSufEqLen[nI - 1] //n条向后移动，前缀对称到后缀
    if (needle[nI] == needle[hI]) nI++
    preSufEqLen[hI] = nI
  }
  //console.log(preSufEqLen)
  for (let hI = 0, nI = 0; hI < hL; hI++) {
    while (nI > 0 && needle[nI] !== haystack[hI]) nI = preSufEqLen[nI - 1]
    if (needle[nI] == haystack[hI]) nI++
    if (nI == nL) return hI - nL + 1
  }
  return -1
};