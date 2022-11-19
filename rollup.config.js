import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import gzipPlugin from 'rollup-plugin-gzip';
import multiInput from 'rollup-plugin-multi-input';
import { terser } from 'rollup-plugin-terser';
import summary from 'rollup-plugin-summary';
// import components from './src/components';
// console.log(components);

export default [
  {
    // input: ['src/*.ts', 'learn/*.ts'],
    input: ['src/*.ts'],
    output: {
      dir: 'dist/',
      format: 'esm',
      chunkFileNames: '[name].js'
    },
    onwarn(warning) {
      if (warning.code !== 'THIS_IS_UNDEFINED') {
        console.error(`(!) ${warning.message}`);
      }
    },
    plugins: [
      typescript({ tsconfig: './tsconfig.build.json' }),
      replace({ 'Reflect.decorate': 'undefined', preventAssignment: true }),
      nodeResolve(),
      summary({ showGzippedSize: true, showMinifiedSize: true }),
      terser({
        ecma: 2017,
        module: true,
        warnings: true,
        mangle: {
          properties: {
            regex: /^__/
          }
        }
      }),
      gzipPlugin(),
      multiInput()
    ]
  }
];
