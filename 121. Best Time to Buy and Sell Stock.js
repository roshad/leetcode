function maxProfit(prices) {
    let maxP = 0,curP=0
    for(let ind=1;ind<prices.length;ind++){
        const lastChange = prices[ind]-prices[ind-1]
        if (curP+lastChange>0)curP+=lastChange
        else curP=0
        if (curP>maxP) maxP=curP
    }
    return maxP
}