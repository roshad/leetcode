var countPrimes = function(n) {
    const mem = new Array(n)
    let amount=0
    for (let i=2;i<n;i++){
        if (!mem[i]) {            
            amount++
            for (let times=2;times*i<n;times++) mem[times*i]=1
        }
    }
    return amount
};

