/**
 * 去重
 * @param arr 
 * @returns 
 */
export function unique(arr: any[]) {
  return [...new Set(arr)];
}

/**
 * 判断一个元素是否在集合中
 * @param arr 
 * @param val 
 * @returns 
 */
export function has(arr: any[], val: any) {
  const set = new Set(arr);
  return set.has(val);
}

/**
 * 求交集
 * @param set1 
 * @param set2 
 * @returns 
 */
export function intersection(set1: Set<any>, set2: Set<any>): Set<any> {
  return new Set([...set1].filter(item => set2.has(item)));
}

/**
 * 求并集
 * @param set1 
 * @param set2 
 * @returns 
 */
 export function union(set1: Set<any>, set2: Set<any>): Set<any> {
  return new Set([...set1, ...set2]);
}