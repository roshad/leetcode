function maxProfit(prices) {

    for (var index = 0, ret = 0; index < prices.length; index++) {
        const diff = prices[index] > prices[index - 1]
        if (diff > 0) ret += diff
    }
    return ret
}