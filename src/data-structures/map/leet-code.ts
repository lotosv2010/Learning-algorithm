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

// todo 两数之和
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const ret = target - n;
    if(map.has(ret)) {
      return [map.get(ret), i];
    } else {
      map.set(n, i);
    }
  }
  return [];
};

// todo 无重复字符的最长子串
export function lengthOfLongestSubstring(s: string): number {
  let l = 0; // 左指针
  let res = 0;
  const map = new Map();
  for (let r = 0; r < s.length; r++) { // r 右指针
    const sub = s[r];
    const i: number = map.get(sub); // map中重复字符的下标
    if(map.has(sub) && i >= l) { // i >= r 排除 abba，这种情况，保证重复字符在滑动窗口里面
      l = i + 1; // 如果找到重复的，就讲左指针移动到重复字符的下一位
    }
    res = Math.max(res, r - l + 1);
    map.set(sub, r); // 利用了map唯一的特性
  }
  return res;
};

// todo 最小覆盖子串
export function minWindow(s: string, t: string): string {
  let l = 0; // 左指针
  let r = 0; // r 右指针
  const need = new Map();
  let res = '';
  for (const c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  }
  let needType = need.size;
  while(r < s.length) {
    const c = s[r];
    if(need.has(c)) {
      need.set(c, need.get(c) - 1);
      if(need.get(c) === 0) needType -= 1;
    }
    while(needType === 0) {
      // console.log(s.substring(l, r + 1));
      const newRes = s.substring(l, r + 1);
      if(!res || newRes.length < res.length) res = newRes;
      const c2 = s[l];
      if(need.has(c2)) {
        need.set(c2, need.get(c2) + 1);
        if(need.get(c2) === 1) needType += 1;
      }
      l += 1;
    }
    r += 1;
  }
  return res;
};