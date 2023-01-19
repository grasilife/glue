import glueConfig from "./common/config";
import previewRouterExternals from "./common/previewRouterExternals";
export * from "./utils/iframe-router";
// function iframeReady(iframe: any, callback: () => void) {
//   const doc = iframe.contentDocument || iframe.contentWindow.document;
//   const interval = () => {
//     if (iframe.contentWindow.replacePath) {
//       callback();
//     } else {
//       setTimeout(interval, 50);
//     }
//   };

//   if (doc.readyState === "complete") {
//     interval();
//   } else {
//     iframe.onload = interval;
//   }
// }

const ua = navigator.userAgent.toLowerCase();
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);

export function decamelize(str: string, sep = "-") {
  return str
    .replace(/([a-z\d])([A-Z])/g, "$1" + sep + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + sep + "$2")
    .toLowerCase();
}
// function initIframe() {
//   window.syncPath = function() {
//     const router = window.vueRouter;
//     console.log(router, window.top, "router");
//     const isInIframe = window !== window.top;
//     const currentDir = router.currentRoute.path;
//     console.log(currentDir, isInIframe, !isMobile, "currentDir");
//     if (isInIframe) {
//       window.top?.replacePath(currentDir);
//     } else if (!isMobile) {
//       const iframe: any = document.querySelector("iframe");
//       console.log(iframe, currentDir, "iframe");
//       if (iframe) {
//         iframeReady(iframe, () => {
//           iframe.contentWindow.replacePath(currentDir);
//         });
//       }
//     }
//   };

//   window.replacePath = function(path = "") {
//     console.log(window.vueRouter, "window.vueRouter");
//     if (window.vueRouter.currentRoute.path !== path) {
//       window.vueRouter.replace(path).catch(() => {});
//     }
//   };
// }
export {
  glueConfig,
  previewRouterExternals,
  isMobile,
  // iframeReady,
  // initIframe,
};
