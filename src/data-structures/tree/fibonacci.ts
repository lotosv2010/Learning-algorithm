export function fibonacciIterative(n: number): number {
  if(n < 1) return 0;
  let f = 0; // 第 n - 2 个
  let s = 1; // 第 n - 1 个
  let fibN = n;
  for (let i = 2; i <= n; i++) { // 从第 2 个开始, f(2) = 0 + 1
    fibN = f + s; // f(n) = f(n - 1) + f(n - 2)
    f = s;
    s = fibN;
  }
  return fibN;
}

export function fibonacci(n: number): number {
  if(n < 1) return 0;
  if(n <= 2) return 1;
  return fibonacci(n - 2) + fibonacci(n - 1)
}

export function fibonacciMemoization(n: number): number {
  if(n < 1) return 0;
  const memo = [0, 1];
  const fibonacciMemo = (num: number): number => {
    if(memo[num] != null) return memo[num];
    return memo[num] = fibonacciMemo(num - 1) + fibonacciMemo(num - 2);
  }
  return fibonacciMemo(n);
}
