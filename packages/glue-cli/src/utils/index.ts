const ua = navigator.userAgent.toLowerCase();
export const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);

export function decamelize(str: string, sep = "-") {
  return str
    .replace(/([a-z\d])([A-Z])/g, "$1" + sep + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + sep + "$2")
    .toLowerCase();
}
