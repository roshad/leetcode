function maxProfit(prices) {

    let max = 0,buy_price = prices[0],cur_profit
    for (let i = 0; i < prices.length; ++i) {
        if (prices[i] < buy_price) buy_price = prices[i] 

        else {
            cur_profit = prices[i] - buy_price;
            if (cur_profit > max) max = cur_profit;
        }
    }
    return max;
}