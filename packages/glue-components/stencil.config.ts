import { Config } from '@stencil/core';
import { less } from '@stencil/less';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
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
  ],
  buildEs5: true,
};
