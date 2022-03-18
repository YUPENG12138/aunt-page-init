# AUNT-PAGE-INIT

项目用于阿姨web，帮助快速初始化页面。

## 安装

```bash
npm i aunt-page-init -D
```

## 使用
```
npx aunt-page-init init <页面名称>
```

## 流程演示

### 运行 & 输入

输入内容，包含页面中英文描述，英文用于生成文件夹、文件名称。中文用于生成备注、及页面title。

![运行 & 输入](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ad5032514984f58bb1947ae8a3f44bb~tplv-k3u1fbpfcp-zoom-1.image)

## 生成内容

### 内容生成概述

新生成三个文件:
```
src/pages/<页面名称>/App.vue
src/pages/<页面名称>/index.js
template/afe/<页面名称>.html
```
追加内容两个文件:
```
config/getPages.js
src/configs/page.js
```
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df767506a2f44b838c505bad7fb84fca~tplv-k3u1fbpfcp-zoom-1.image)

### 内容生成详述

`src/pages/<页面名称>/App.vue`

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ea11f57142b4e3abcc7c0a6303fe753~tplv-k3u1fbpfcp-zoom-1.image)

`src/pages/<页面名称>/index.js`

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5e5519354054f43b97b68460bc7a640~tplv-k3u1fbpfcp-zoom-1.image)

`template/afe/<页面名称>.html`

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3cf51db7ed84b418bde99dc570cfd54~tplv-k3u1fbpfcp-zoom-1.image)

`config/getPages.js`

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5c2adf215344455a0e0e2e796591d2e~tplv-k3u1fbpfcp-zoom-1.image)

`src/configs/page.js`

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ef496060f6243928336ccadcf7c9022~tplv-k3u1fbpfcp-zoom-1.image)

