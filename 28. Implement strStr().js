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
//Rabin Karp
let strStr = function (haystack, needle) {
  const nLen = needle.length,
    hLen = haystack.length;
  if (nLen>hLen)return -1
  let hash=0,nHash=0
  const base=26,modNum=Math.pow(2,31),
  chaToNum=(ind,str)=>str.charCodeAt(ind)-"a".charCodeAt(0)
  for (let i=0;i<nLen;i++){
    hash=(hash*base+chaToNum(i,haystack)) % modNum
    nHash=(nHash*base+chaToNum(i,needle)) % modNum 
  }
  if (hash==nHash)return 0
  let prevProcess=1
  for (let i=1;i<=nLen;i++)prevProcess=(prevProcess*base)%modNum
   //解决长度为nLen为1时 -1的缺陷
  for (let head_i=1;head_i<=hLen-nLen;head_i++){
    hash=(hash*base-chaToNum(head_i-1,haystack)*prevProcess+chaToNum(head_i+nLen-1,haystack))%modNum
    if (hash==nHash)return head_i
  }
  return -1

};
