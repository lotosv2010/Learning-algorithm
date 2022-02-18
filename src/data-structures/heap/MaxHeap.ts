import MinHeap from './minHeap';
import { defaultCompare, reverseCompare } from '../../util';

export default class MaxHeap<T> extends MinHeap<T> {
  protected compareFn: any;
  constructor(compareFn = defaultCompare ) {
    super(compareFn)
    this.compareFn = reverseCompare(defaultCompare);
  }
}