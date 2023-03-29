// 记录所有当前数的倍数
var countPrimes = function(n) {
  let count=0,notPrime= new Array(n)
  for (let num=2;num<n;num++){
      if (!notPrime[num]){
          count++
          for (let time=num;time*num<n;time++)
              notPrime[time*num]=true          
      }
  }
  return count
};
//现行筛 空间n 时间n 仅最小质因数标记一次
//例如4如果继续*3，那么被标记的12就有>2的质因数了。
// && i * primes[j] < n没这一个，primes就会过大，导致out of memory
var countPrimes = function(n) {
    const isPrime = new Array(n).fill(1);
    const primes = [];
   
    for (let i = 2; i < n; ++i) {
        if (isPrime[i]) {
            primes.push(i);
        }
        for (let j = 0; j < primes.length && i * primes[j] < n; ++j) {
            isPrime[i * primes[j]] = 0;
            if (i % primes[j] === 0) {
                break;
            }
        }
    }
    return primes.length;
};
