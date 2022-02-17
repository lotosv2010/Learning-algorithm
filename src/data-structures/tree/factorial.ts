export function factorialIterative(n: number): number {
  let total = 1;
  for (let i = n; i > 0; i--) {
    total = total * i;
  }
  return total;
}

export function factorial(n: number): number {
  // console.trace()
  if(n < 1) return 1
  return n * factorial(n - 1);
}