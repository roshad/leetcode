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
//线性筛 空间n 时间n 仅最小质因数标记一次


var countPrimes = function(n) {
    const isPrime = new Array(n).fill(1);
    const primes = [];
   
    for (let i = 2; i < n; ++i) {
        if (isPrime[i]) {
            primes.push(i);
        }
        for (let j = 0; j < primes.length && i * primes[j] < n; ++j) { // && i * primes[j] < n没有，isPrime就会增大，导致out of memory
            isPrime[i * primes[j]] = 0;
            if (i % primes[j] === 0) break 
          //避免在质因数列表中加入比当前(primes[j])更大的质因数。
            
        }
    }
    return primes.length;
};
