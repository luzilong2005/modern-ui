# 快速上手

::: warning ⚠️ 前置条件
- [Node.js](https://nodejs.org/) 22+
- [Vue.js](https://cn.vuejs.org/) 3.5+
- [TypeScript](https://www.typescriptlang.org/) 5.9+
:::

## 安装
::: code-group
```sh [npm]
npm i modern-ui
```

```sh [pnpm]
pnpm add modern-ui
```
:::

## 全局引入
::: code-group
```ts [main.ts]
import { createApp } from "vue";
import App from "./App.vue";
import ModernUI from "modern-ui"; // [!code ++]
import "modern-ui/dist/style.css"; // [!code ++]

const app = createApp(App);
app.use(ModernUI); // [!code ++]
app.mount("#app");
```

```json [tsconfig.app.json]
{
  "compilerOptions": {
    "types": ["modern-ui/components"] // [!code ++]
  }
}
```

```vue [App.vue]
<template>
    <MuButton>Button</MuButton> // [!code ++]
<template/>
```
:::

## 局部引入
::: code-group
```ts [main.ts]
import { createApp } from "vue";
import App from "./App.vue";
import "modern-ui"; // [!code ++]

const app = createApp(App);
app.mount("#app");
```


```vue [App.vue]
<template>
    <MuButton>Button</MuButton>
<template/>

<script setup lang="ts">
import { MuButton } from "modern-ui"; // [!code ++]
</script>
```
:::