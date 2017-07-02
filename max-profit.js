/*
   - create a function maxProfit
   - should return the maximum profit that could have been made by buying a stock
     at the given price and then selling the stock later on.
   - eg: [45, 24, 35, 31, 40, 38, 11]
   - return 16 (because bought the stock at $24 and sold it at $40, a profit of $16).
   - if no profit could have been made, return -1.
*/

function maxProfit(prices, aMaximumProfit=0) {
  // base case: pricesArray.length = 2
  var maximumProfit = aMaximumProfit;
  var noOfElements = prices.length;
  var lastPrice = prices[noOfElements - 1]; // last price in the prices array
  var profit = 0;

  if(noOfElements === 1 || noOfElements === 0) {
    return maximumProfit === 0 ? -1 : maximumProfit;
  } else {
    for(var i = 0; i < noOfElements - 1; i++) {
      profit = lastPrice - prices[i];
      if(profit > maximumProfit) {
        maximumProfit = profit;
      }
    }
  }
  return maxProfit(prices.slice(0, noOfElements - 1), maximumProfit);
}

module.exports = maxProfit;