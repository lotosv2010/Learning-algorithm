export const func1 = () => {
  const res = func2();
  return res + 'func1';
}
const func2 = () => {
  const res = func3();
  return res + 'func2';
}
const func3 = () => {
  return 'func3';
}