import { Config } from '@stencil/core';
import { less } from '@stencil/less';
export const config: Config = {
  namespace: 'glue-components',
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
  buildEs5: true,
  enableCache: true,
  minifyJs: true,
  minifyCss: true,
};
