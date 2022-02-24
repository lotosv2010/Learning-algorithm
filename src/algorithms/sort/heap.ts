import { defaultCompare, swap, Compare } from '../../util';

const buildMaxHeap = (array: any[], compareFn: Function) => {
  for (let i =  Math.floor(array.length / 2); i >=0; i--) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}

const heapify = (array: any[], index: number, heapSize: number, compareFn: Function) => {
  let largest = index;
  const left = (2 * index) + 1;
  const right = (2 * index) + 2;
  if(left < heapSize && compareFn(array[left], array[index]) === Compare.BIGGER_THAN) {
    largest = left;
  }
  if(right < heapSize && compareFn(array[right], array[largest]) === Compare.BIGGER_THAN) {
    largest = right;
  }
  if(largest !== index) {
    swap(array, index, largest);
    heapify(array, largest, heapSize, compareFn);
  }
}

export function heap(array: any[], compareFn: Function = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn);
  while(heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize, compareFn);
  }
  return array;
}