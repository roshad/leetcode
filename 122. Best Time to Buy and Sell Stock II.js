//复杂度一致，但时间短
var maxProfit = function(prices) {
    
    //if (prices.length <= 1) return 0 //减4ms
        
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};