// 时间复杂度：O(n*logn)
// 空间复杂度：O(n)
export function findMinDifference(timePoints: string[]): number {
  console.time('最小时间差');
  // 将时间转换成分钟数保存，24小时总共1440分钟
  let minutes = [];
  // 如果超过了1440，那么同一个分钟值出现了两次，直接返回0
  if(timePoints.length > 1440) return 0
  // 遍历一遍数组，把所有值转换成分钟
  minutes = timePoints.map(t => {
    const [h, m]: any = t.split(':');
    return (+h) * 60 + (+m);
  });
  // 转换后的结果排个序
  minutes.sort((a, b) => a -b);
  // 先把最末尾的和最头上的差值当成min值，比如尾23：59 头是 00:01
  let min = 1440 - minutes[timePoints.length - 1] + minutes[0]
  // 再遍历一遍找到差值最小的替代min
  for(let i = 1; i < timePoints.length; i++){
    min = Math.min( (minutes[i] - minutes[i-1]), min )
  }
  console.timeEnd('最小时间差');
  return min;
};
