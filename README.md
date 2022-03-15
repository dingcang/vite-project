# Vue 3 + Typescript + Vite + NaiveUI

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## guide

### 全局组件

1. 在`src/components`下面创建的vue文件会被[`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components)自动加载
2. 项目使用的[`naive-ui`](https://www.naiveui.com/zh-CN/os-theme/docs/introduction)组件库会被[`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components)自动加载。

### 路由加载

 在`src/views`目录下的vue、ts、js文件会被[`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages)按照层级自动生成路由，并通过`import route from "~pages";`在路由文件中引用。

### 一些实验
