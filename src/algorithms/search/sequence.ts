import { defaultEquals } from "../../util";

export function sequential(
  array: any[],
  target: any,
  equalsFn: Function = defaultEquals
): number {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (equalsFn(element, target)) {
      return i;
    }
  }
  return -1;
}
