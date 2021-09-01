// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop() {}

export const inBrowser = typeof window !== 'undefined';

export function isDef<T>(val: T): val is NonNullable<T> {
  return val !== undefined && val !== null;
}
export function resetBoolean(val) {
  if (val == '') {
    return true;
  }
  if (val == undefined) {
    return false;
  }
  if (val === false) {
    return false;
  }
  if (val === true) {
    return true;
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object';
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

export function get(object: any, path: string): any {
  const keys = path.split('.');
  let result = object;

  keys.forEach(key => {
    result = result[key] ?? '';
  });

  return result;
}

export function pick(obj: Record<string, any>, keys: string[]) {
  return keys.reduce((ret, key) => {
    ret[key] = obj[key];
    return ret;
  }, {} as Record<string, any>);
}
export const getElementChildren = (el: any) => {
  return el.children != null ? el.children : el.childNodes;
};
export const getElementParent = (el: any) => {
  return el.parentElement != null ? el.parentElement : el.parentNode;
};
export const getAttribute = (el: any, prop: string) => {
  console.log(el, 'el.hasAttribute(prop)');
  if (el.hasAttribute(prop)) {
    return el.getAttribute(prop);
  }
};
