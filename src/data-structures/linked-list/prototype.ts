export const instanceOf = (A: any, B: any): boolean => {
  let p: any = A;
  while(p) {
    if(B.prototype === p) return true;
    p = p.__proto__;
  }
  return false;
}