/**
 * 增
 * @param map 
 * @param key 
 * @param value 
 * @returns 
 */
export function set(map: Map<string, any>, key: string, value: any): Map<string, any> {
  map.set(key, value);
  return map;
}

/**
 * 删
 * @param map 
 * @param key 
 * @returns 
 */
export function del(map: Map<string, any>, key: string): Map<string, any>  {
  map.delete(key);
  return map;
}

export function clear(map: Map<string, any>): Map<string, any>  {
  map.clear();
  return map;
}

/**
 * 改
 * @param map 
 * @param key 
 * @param value 
 * @returns 
 */
export function update(map: Map<string, any>, key: string, value: any): Map<string, any> {
  map.set(key, value);
  return map;
}

/**
 * 查
 * @param map 
 * @param key 
 * @returns 
 */
export function has(map: Map<string, any>, key: string): boolean  {
  return map.has(key);
}

/**
 * 查
 * @param map 
 * @param key 
 * @returns 
 */
export function get(map: Map<string, any>, key: string): any {
  return map.get(key);
}