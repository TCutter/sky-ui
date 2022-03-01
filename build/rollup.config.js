import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

import { name } from '../package.json'

const file = type => `dist/${name}.${type}.js`
const overrides = {
  compilerOptions: { declaration: true },
  exclude: ['node_modules', 'src/App.vue', 'src/main.ts']
}

export { name, file }
export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(), // 导入路径处理
    typescript({ tsconfigOverride: overrides }), // ts支持
    css({ output: 'index.css' }), // css 支持
    vue() // vue 支持
  ],
  external: ['vue', 'lodash-es'] // 第三方打包文件排除
}
