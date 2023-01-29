import { Plugin } from "vue";
import { applyPolyfills, defineCustomElements } from "glue-components/loader";

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
