# Loader 加载器

用于表示加载中的状态。

## 基础用法
<demo vue="./Basics.vue"/>

## 不同类型
<demo vue="./Types.vue"/>

## 不同尺寸
<demo vue="./Sizes.vue"/>

## 自定义颜色
<demo vue="./Colors.vue"/>

## 自定义加载器
<demo vue="./Custom.vue"/>

## Props 属性
| 属性名       | 类型                 | 默认值       | 说明                    |
| --------- | ------------------ | --------- | --------------------- |
| customLoadingSpinner | `Component` | —         | 自定义加载器组件              |
| size      | `number`           | `1`       | 加载器大小（数值）           |
| defaultSpinner | `"circle" \| "dots"` | `circle`  | 默认加载器类型，可选值为 `circle`、`dots` |
| disabled  | `boolean`          | `false`   | 是否禁用                 |
| class     | `string`           | —         | 自定义类名                |
| style     | `string \| object` | —         | 自定义样式                |

## Slots 插槽
| 插槽名      | 说明           |
| --------- | ------------ |
| default   | 加载器下方的内容     |
