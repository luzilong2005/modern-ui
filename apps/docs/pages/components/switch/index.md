# Switch 开关

用于表示打开或关闭状态的切换控件。

## 基础用法
<demo vue="./Basics.vue"/>

## 带标签
<demo vue="./WithLabel.vue"/>

## 不同尺寸
<demo vue="./Sizes.vue"/>

## 禁用状态
<demo vue="./Disabled.vue"/>

## 文字描述
<demo vue="./WithText.vue"/>

## Props 属性
| 属性名           | 类型                 | 默认值       | 说明                    |
| ------------- | ------------------ | --------- | --------------------- |
| id            | `string`           | —         | 开关的id                 |
| name          | `string`           | —         | 开关的name               |
| label         | `string`           | —         | 开关的标签                |
| labelPosition | `InlineInputLabelPosition` | `right`   | 标签位置，可选值为 `left`、`right` |
| size          | `SwitchSize`       | `md`      | 开关尺寸，可选值为 `sm`、`md`、`lg` |
| defaultChecked| `boolean`          | `false`   | 默认是否选中              |
| modelValue    | `boolean`          | `false`   | 绑定值（v-model）         |
| disabled      | `boolean`          | `false`   | 是否禁用                 |

## Events 事件
| 事件名      | 说明           | 回调参数   |
| --------- | ------------ | ------ |
| change    | 状态改变时触发     | (ev: Event, checked: boolean) |

## 方法
| 方法名      | 说明           | 参数   |
| --------- | ------------ | ------ |
| inputRef  | 获取input元素引用 | —      |
