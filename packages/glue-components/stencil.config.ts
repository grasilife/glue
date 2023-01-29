import { Config } from '@stencil/core';
import { less } from '@stencil/less';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget as react } from '@stencil/react-output-target';
export const config: Config = {
  namespace: 'glue-components',
  autoprefixCss: true,
  globalStyle: 'src/global/styles/base.less',
  plugins: [
    postcss({
      plugins: [autoprefixer()],
    }),
    less(),
  ],
  buildEs5: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
    vueOutputTarget({
      componentCorePackage: 'glue-components',
      proxiesFile: '../glue-vue3/src/components.ts',
    }),

    react({
      componentCorePackage: 'glue-components',
      proxiesFile: '../glue-react/src/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
};
