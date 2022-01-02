/**
 * 测试函数
 * 接受一个函数，并在返回函数每次调用时给其传入一个闭包的累加值
 */
 const testFunc = function (callback: (num: number) => any): () => void {
  let localValue = 0;
  return () => callback(localValue ++)
}

export default testFunc;