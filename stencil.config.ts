import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-components',
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
      copy:[
        { src: 'assets/fontawesome/webfonts', dest: 'webfonts' },
        { src: 'assets/material/fonts/*', dest:'webfonts' }
      ]
    },
  ],
};
