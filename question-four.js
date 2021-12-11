var prices = [7, 1, 5, 3, 6, 4]; //Input Arry

function maxProfit(prices) {
  var profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
}

console.log(maxProfit(prices));
