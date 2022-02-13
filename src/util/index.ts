export const defaultEquals = (a: any, b: any) => {
  return a === b
}

export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUAL = 0
}

export const defaultCompare = (a: any, b: any) => {
  if(a === b) {
    return Compare.EQUAL;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}