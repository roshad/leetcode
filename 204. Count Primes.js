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
