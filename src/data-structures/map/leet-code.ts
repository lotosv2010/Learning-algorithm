// todo 两个数组的交
export function intersection(nums1: number[], nums2: number[]): number[] {
  const map = new Map();
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], true);
  }
  for (let i = 0; i < nums2.length; i++) {
    const val = nums2[i];
    if(map.has(val)) {
      res.push(val);
      map.delete(val);
    }
  }
  return res;
};

// todo 有效的括号
export function isValid(s: string): boolean {
  if(s.length % 2 === 1) return false;
  const stack = [];
  const map = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if(map.has(c)) { // 左括号入栈
      stack.push(c);
    } else { // 右括号与栈顶左括号进行匹配
      const left: any = stack.pop();
      if(map.get(left) !== c) return false;
    }
  }
  return stack.length === 0; 
};