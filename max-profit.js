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
  var lastPrice = prices[noOfElements - 1];
  var profit = 0;

  if(noOfElements === 1) {
    return maximumProfit === 0 ? -1 : maximumProfit;
  } else {
    for(var i = 0; i < noOfElements - 1; i++) {
      console.log(i + ' price: ' + prices[i] + ' last price: ' + lastPrice);
      profit = lastPrice - prices[i];
      console.log(`\tprofit: ${profit} x max: ${maximumProfit}`);
      if(profit > maximumProfit) {
        maximumProfit = profit;
        console.log(`\t\tmax: ${maximumProfit}`);
      }
    }
  }
  return maxProfit(prices.slice(0, noOfElements - 1), maximumProfit);
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([45, 24, 21, 11, 9, 5]));
