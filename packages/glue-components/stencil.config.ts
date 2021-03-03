import { Config } from '@stencil/core';
import { less } from '@stencil/less';
export const config: Config = {
  namespace: 'glue-components',
  globalStyle: 'src/global/styles/base.less',
  plugins: [less()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  // buildEs5: false,
  // minifyJs: true,
  // minifyCss: true,
};
