## Sky-ui 组件库

### Rollup Vs Webpack

1. `Rollup` 偏向应用于 js `库，webpack` 偏向应用于前端工程，UI 库；如果你的应用场景中只是 js 代码，希望做 ES 转换，模块解析，可以使用 `Rollup`。如果你的场景中涉及到 css、html，涉及到复杂的代码拆分合并，建议使用 `webpack。`

2. `rollup` 所有资源放同一个地方，一次性加载,利用 tree-shake 特性来 剔除未使用的代码，减少冗余
   `webpack` 拆分代码、按需加载 `webpack2` 已经逐渐支持 tree-shake
   `rollup`: 1.打包你的 js 文件的时候如果发现你的无用变量，会将其删掉。 2.可以将你的 js 中的代码，编译成你想要的格式
   `webpack`: 1.代码拆分 2.静态资源导入（如 js、css、图片、字体等）
   拥有如此强大的功能，所以 webpack 在进行资源打包的时候，就会产生很多冗余的代码。

### Package.json:

1. dependencies

- 运行项目业务逻辑需要依赖的第三方库
- `npm install` 时会被下载

2. devDependencies

   - 开发模式工作流下依赖的第三方库
   - 单元测试，语法转换，lint 工具，程序构建，本地开发等
   - `npm install` 时会被下载

3. peerDependencies

   - 需要核心依赖库，项目不能脱离依赖库单独使用
   - 可以避免类似的核心依赖库被重复下载的问题
   - `npm install` 时不会被下载

4. main 和 module
   module 表示 pkg.module，引用的项目会根据不同使用场景自动选择使用 module 还是 main 进行加载
5. `private` 设为 false 才可以上传至 npm
6. `files`字段
   - 只有 `files` 中定义的文件才会上传至`npm`.指示 `npm publish` 中需要上传的内容
   - 默认忽略掉 `.gitignore`中的内容
   - `package.json\readme.md\changelog.md\LICENSE`都会默认包含在其中
7. `husky`插件：`git commit` 前校验

### 使用 `npm link` 测试组件库

1. SourcePath: `npm link` 创建软链接到全局环境
2. TargetPath: `npm link SkyUI`直接引用本地环境
3. SourcePath: `npm link ${TargetPath}/node_modules/vue`链接 `TargetPath` 的 vue 版本，否则会报错
4. 给打包出来的 `js` 添加`/* eslint-disable*/`
