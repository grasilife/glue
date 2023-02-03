const ua = navigator.userAgent.toLowerCase();
export const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);

export function decamelize(str: string, sep = "-") {
  return str
    .replace(/([a-z\d])([A-Z])/g, "$1" + sep + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + sep + "$2")
    .toLowerCase();
}
export function getDemoName(route: { meta: any; path: string }) {
  const { meta } = route || {};
  if (meta && meta.path) {
    return `demo-${decamelize(meta.path)}`;
  }

  return "";
}
export function searchType(types: any[], defaultType: string) {
  let current = "";
  types.map((item: any) => {
    if (location.href.includes(item.label)) {
      current = item.label;
    }
  });
  return current ? current : defaultType;
}
export function searchLang(locales: {}, defaultLang: any) {
  let current = "";
  Object.keys(locales).map((lang: any) => {
    if (location.href.includes(lang)) {
      current = lang;
    }
  });
  return current ? current : defaultLang;
}
