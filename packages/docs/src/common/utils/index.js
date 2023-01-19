export const inBrowser = typeof window !== "undefined";

export function noop() {}

export function isDef(val) {
  return val !== undefined && val !== null;
}

export function isFunction(val) {
  return typeof val === "function";
}

export function isObject(val) {
  return val !== null && typeof val === "object";
}

export function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

export function get(object, path) {
  const keys = path.split(".");
  let result = object;

  keys.forEach(key => {
    result = result[key] ?? "";
  });

  return result;
}
