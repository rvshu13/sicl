import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'sicl',
  globalStyle: 'src/global/global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/variables.scss',
        'src/global/mixins.scss'
      ]
    })
  ]
};
