import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'glue-components',
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
  buildEs5: false,
  enableCache: true,
  minifyJs: true,
  minifyCss: true,
};
