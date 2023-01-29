import { Plugin } from "vue";
import { applyPolyfills, defineCustomElements } from "@nps/nps-stencil/loader";

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
