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

