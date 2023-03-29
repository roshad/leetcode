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
 //如果 x 可以被 primes[j]​整除，那么对于合数 y=x⋅primes[ j+1] ​ 而言，它会在后面遍历到​ x/primes[j] ⋅primes[j+1] ​ 这个数的时候会被标记，其他同理，这保证了每个合数只会被其「最小质因数」筛去一次。
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
