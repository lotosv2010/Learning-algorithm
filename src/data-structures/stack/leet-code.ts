export function isValid(s: string): boolean {
  if(s.length % 2 === 1) return false;
  const stack = [];
  const map = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if(['(', '{', '['].includes(c)) { // 左括号入栈
      stack.push(c);
    } else { // 右括号与栈顶左括号进行匹配
      const left: any = stack.pop();
      // console.log(left, c, map.get(left) !== c, stack)
      if(map.get(left) !== c) return false;
    }
  }
  return stack.length === 0; 
};