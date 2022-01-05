import { createSecretKey } from "crypto";

// todo 有效数字
export function isNumber1(s: string): boolean {
  const regex = /^[+-]?((\d+)|(\d+\.\d*)|(\d*\.\d+))([eE][+-]?\d+)?$/;
  return regex.test(s);
};

export function isNumber(s: string): boolean {
  const graph: any = {
    0: { 'blank':0, 'sign': 1, '.': 2, 'digit': 6 },
    1: { 'digit': 6, '.': 2 },
    2: { 'digit': 3 },
    3: { 'digit': 3, 'e': 4 },
    4: { 'digit': 5, 'sign': 7 },
    5: { 'digit': 5 },
    6: { 'digit': 6, '.': 3, 'e': 4 },
    7: { 'digit': 5 }
  }
  let state = 0;
  const blank = /\s/;
  const sign = /\+|-/;
  const dot = /\./;
  const digit = /\d/;
  const e = /e|E/;
  for (let c of s.trim()) {
    if (digit.test(c)) {
      c = 'digit';
    } else if (blank.test(c)) {
      c = 'blank'
    } else if (sign.test(c)) {
      c = 'sign'
    } else if (dot.test(c)) {
      c = '.'
    } else if (e.test(c)) {
      c = 'e'
    }
    state = graph[state][c];
    if(state === undefined) {
      return false;
    }
  }
  if([3, 5, 6].includes(state)) {
    return true;
  }
  return false;
};