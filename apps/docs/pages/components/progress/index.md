# Progress 进度条

用于显示操作或任务的当前进度。

## 基础用法
<demo vue="./Basics.vue"/>

## 不同尺寸
<demo vue="./Sizes.vue"/>

## 垂直进度条
<demo vue="./Vertical.vue"/>

## 动态变化
<demo vue="./Dynamic.vue"/>

## Props 属性
| 属性名       | 类型                 | 默认值       | 说明                    |
| --------- | ------------------ | --------- | --------------------- |
| size      | `ProgressSize`     | `md`      | 进度条尺寸，可选值为 `sm`、`md`、`lg` |
| max       | `number`           | `100`     | 进度条最大值               |
| value     | `number`           | `0`       | 进度条当前值               |
| direction | `ProgressDirection`| `horizontal` | 进度条方向，可选值为 `horizontal`、`vertical` |
| disabled  | `boolean`          | `false`   | 是否禁用                 |
| class     | `string`           | —         | 自定义类名                |
| style     | `string \| object` | —         | 自定义样式                |
