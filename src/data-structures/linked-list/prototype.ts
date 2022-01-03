export const instanceOf = (A: any, B: any): boolean => {
  let p: any = A;
  while(p) {
    console.log(p.__proto__, B.prototype, 111)
    if(B.prototype === p) return true;
    p = p.__proto__;
  }
  return false;
}