import { insertion } from './insertion';

const createBuckets = (array: any[], bucketSize: number = 5) => {
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    const item = array[i];
    if(item < minValue) {
      minValue = item
    } else if(item > maxValue) {
      maxValue = item;
    }
  }
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets: any[][] = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];  
  }
  for (let i = 0; i < array.length; i++) {
    const index =  Math.floor((array[i] - minValue) / bucketSize);
    // console.log(index, buckets, array[i], minValue);
    buckets[index].push(array[i]);
  }
  return buckets;
}

const bucketSort = (buckets: any[][]) => {
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if(buckets[i] != null) {
      insertion(buckets[i]);
      sortedArray.push(...buckets[i]);
    }
  }
  return sortedArray;
}
export function bucket(array: any[], bucketSize: number = 5) {
  if(array.length < 2) return array;
  const buckets = createBuckets(array, bucketSize);
  // console.log(buckets)
  return bucketSort(buckets);
}