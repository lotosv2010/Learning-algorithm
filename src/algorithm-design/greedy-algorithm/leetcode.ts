// todo 分发饼干
export function findContentChildren(g: number[], s: number[]): number {
  console.time('分发饼干');
  const cb = (a: number, b: number) => a - b;
  g.sort(cb);
  s.sort(cb);
  let i = 0;
  s.forEach(n => {
    if(n >= g[i]) {
      i++;
    }
  });
  console.timeEnd('分发饼干');
  return i;
};

// todo 买卖股票的最佳时机 II
export function maxProfit(prices: number[]): number {
  console.time('买卖股票的最佳时机 II');
  let profit = 0;
  for(let i = 1; i < prices.length; i++) {
    if(prices[i - 1] < prices[i]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  console.timeEnd('买卖股票的最佳时机 II');
  return profit;
};