/**
 * 同步父窗口和 iframe 的 vue-router 状态
 */

import { iframeReady, isMobile } from ".";

window.syncPath = function() {
  const router = window.vueRouter;
  console.log(router, window.top, "router");
  const isInIframe = window !== window.top;
  const currentDir = router.currentRoute.path;
  console.log(currentDir, isInIframe, !isMobile, "currentDir");
  if (isInIframe) {
    window.top.replacePath(currentDir);
  } else if (!isMobile) {
    const iframe = document.querySelector("iframe");
    console.log(iframe, currentDir, "iframe");
    if (iframe) {
      iframeReady(iframe, () => {
        iframe.contentWindow.replacePath(currentDir);
      });
    }
  }
};

window.replacePath = function(path = "") {
  //   should preserve hash for anchor
  console.log(window.vueRouter, "window.vueRouter");
  if (window.vueRouter.currentRoute.path !== path) {
    window.vueRouter.replace(path).catch(() => {});
  }
};
