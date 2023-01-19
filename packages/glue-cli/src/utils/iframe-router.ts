/**
 * 同步父窗口和 iframe 的 vue-router 状态
 */

import config from "../common/config";

let queue: any[] = [];
let isIframeReady = false;

function iframeReady(callback: { (): void; (): void }) {
  if (isIframeReady) {
    callback();
  } else {
    queue.push(callback);
  }
}

if (window.top === window) {
  window.addEventListener("message", (event) => {
    if (event.data.type === "iframeReady") {
      isIframeReady = true;
      queue.forEach((callback) => callback());
      queue = [];
    }
  });
} else {
  if (window.top) {
    window.top.postMessage({ type: "iframeReady" }, "*");
  }
}

// function getCurrentDir() {
//   const router = window.vueRouter;
//   console.log(router, "router11");
//   const { path } = router.currentRoute.value;

//   if (config.site.simulator?.routeMapper) {
//     return config.site.simulator?.routeMapper(path);
//   }
//   return path;
// }

// export function syncPathToParent() {
//   if (window.top) {
//     window.top.postMessage(
//       {
//         type: "replacePath",
//         value: getCurrentDir(),
//       },
//       "*"
//     );
//   }
// }

// export function syncPathToChild(path: string) {
//   const iframe: any = document.querySelector("iframe");
//   console.log(iframe, "iframeiframeiframe");
//   if (iframe) {
//     iframe.contentWindow.postMessage(
//       {
//         type: "replacePath",
//         value: path,
//       },
//       "*"
//     );
//   }
// }

export function listenParentPathChange(router: any) {
  window.addEventListener("message", (event) => {
    if (event.data?.type !== "replacePath") {
      return;
    }
    console.log(event.data, "event.data");
    const path = event.data?.value || "";
    console.log(path, router, "path11111");
    router.replace(path).catch(() => {});
  });
}
