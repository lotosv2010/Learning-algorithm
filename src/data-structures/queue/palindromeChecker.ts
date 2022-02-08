import Deque from './deque';

function palindromeChecker(str: string): boolean {
  if(str == null || str.length === 0) return false;
  const deque = new Deque();
  let isEqual = true;
  for(const s of str) {
    deque.addBack(s);
  }
  while(deque.size() > 1 && isEqual) {
    if(deque.removeFront() !== deque.removeBack()) {
      isEqual = false;
    }
  }
  return isEqual;
}

export default palindromeChecker;