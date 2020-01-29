var countPrimes = function(n) {
    const notPrime = new Array(n)
    let amount=0
    for (let i=2;i<n;i++){
        if (!notPrime[i]) {            
            amount++
            for (let times=2;times*i<n;times++) notPrime[times*i]=1
        }
    }
    return amount
};

var countPrimes = function(n) {
    const primes=new Set()
    let amount=0
    for (let i=2;i<n;i++){
        if (!primes.has(i)){
            amount++
            for (let times=1;times*i<n;times++)
                primes.add(i*times)
            
        }
    }
    return amount
};