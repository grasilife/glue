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
      componentCorePackage: '@nps/nps-stencil',
      proxiesFile: '../nps-vue3/src/components.ts',
    }),

    react({
      componentCorePackage: '@nps/nps-stencil',
      proxiesFile: '../nps-react/src/components.ts',
      includeDefineCustomElements: false,
    }),
  ],
};
