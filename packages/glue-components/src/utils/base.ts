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

  keys.forEach((key) => {
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

export const getElementChildren = (el: any, tagName: string) => {
  let targetChildren = [];
  function findTagNameEl(el: any) {
    let children = el.children != null ? el.children : el.childNodes;
    if (children) {
      for (let i = 0; i < children.length; i++) {
        let item = children[i];
        console.log(item.tagName, tagName, 'tagNametagName');
        if (item.tagName === tagName) {
          console.log(item, 'hujijijij');
          targetChildren.push(item);
        } else {
          findTagNameEl(item);
        }
      }
    }
  }

  findTagNameEl(el);
  return targetChildren;
};
export const getElementParent = (el: any, tagName: string) => {
  let targetParent = null;
  function findTagNameEl(el: any) {
    let parent = el.parentElement != null ? el.parentElement : el.parentNode;
    console.log(parent, 'parent');
    if (parent.tagName === tagName && targetParent === null) {
      targetParent = parent;
    } else {
      findTagNameEl(parent);
    }
  }

  findTagNameEl(el);
  console.log(targetParent, 'targetParent');
  return targetParent;
};
export const getAttribute = (el: any, prop: string) => {
  console.log(el, 'el.hasAttribute(prop)');
  if (el.hasAttribute(prop)) {
    return el.getAttribute(prop);
  }
};
