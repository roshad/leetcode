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
//Rabin Karp n
// 算出hash，移动时减一个加一个
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
    prevProcess = (prevProcess * prime) % modulus;//减去第一个，乘了很多次的 | 第一次没有乘，但下面用到是多乘了一次的
  }
  if (hash_cur == hash_needle && haystack.slice(0,nL)==needle) return 0;
  for (let i = 1; i <= haystack.length - nL; i++) {
    hash_cur =
      (hash_cur * prime -
        chaToNum(haystack[i - 1]) * prevProcess +
        chaToNum(haystack[i + nL - 1])) %
      modulus;

    if (hash_cur == hash_needle && haystack.slice(i,i+nL)==needle) return i;
  }
  return -1;
};
