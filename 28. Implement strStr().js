//sunday
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
const strStr = function (haystack, needle) {
  const nLen=needle.length,hLen=haystack.length,
  
  if (nLen>hLen)return -1//无此会在第一个for就变成NaN，但一直计算下去

  const prime=26,modular=Math.pow(2,31),//26是>25的最小素数，mod之后为何不会重复，证明不了
  chaToNum=(ind,str)=>str.charCodeAt(ind)-"a".charCodeAt(0)
 //算到needle长
  let hash_cur=0,hash_needle=0
  for (let i=0;i<nLen;i++){
    hash_needle=(hash_needle*prime+chaToNum(i,needle))%modular
    hash_cur=(hash_cur*prime+chaToNum(i,haystack))%modular
  }
  if (hash_needle==hash_cur)return 0
  let prevProcess=1
  for (let i=0;i<nLen;i++)prevProcess=(prevProcess*base)%modNum//减去第一个，乘了很多次的 | 第一次没有乘
  

  for (let head_i=1;head_i<=hLen-nLen;head_i++){
    hash_cur=(hash_cur*base-chaToNum(head_i-1,haystack)*prevProcess+chaToNum(head_i+nLen-1,haystack))%modular
    if (hash_cur==hash_needle)return head_i
  }
  return -1
};

  
  
  
  
 
