# Checkbox 复选框

用于在多个选项中选择一个或多个选项。

## 基础用法
<demo vue="./Basics.vue"/>

## 大小
<demo vue="./Sizes.vue"/>

## 带 Label
<demo vue="./WithLabel.vue"/>

## 复选框组
<demo vue="./Group.vue"/>

## 禁用状态
<demo vue="./Disabled.vue"/>

## Checkbox Props 属性
| 属性名           | 类型                 | 默认值       | 说明                    |
| ------------- | ------------------ | --------- | --------------------- |
| id            | `string`           | —         | 复选框的id               |
| name          | `string`           | —         | 复选框的name             |
| label         | `string`           | —         | 复选框的标签              |
| labelPosition | `InlineInputLabelPosition` | —         | 标签位置，可选值为 `left`、`right` |
| size          | `CheckboxSize`     | `md`      | 复选框尺寸，可选值为 `sm`、`md`、`lg` |
| value         | `string`           | —         | 复选框的值（在复选框组中使用）   |
| defaultChecked| `boolean`          | `false`   | 默认是否选中              |
| disabled      | `boolean`          | `false`   | 是否禁用                 |

## Checkbox Events 事件
| 事件名      | 说明           | 回调参数   |
| --------- | ------------ | ------ |
| change    | 状态改变时触发     | (ev: Event, checked: boolean) |

## CheckboxGroup Props 属性
| 属性名           | 类型                 | 默认值       | 说明                    |
| ------------- | ------------------ | --------- | --------------------- |
| name          | `string`           | —         | 复选框组的name            |
| values        | `Array<string>`    | —         | 复选框组选中的值（v-model绑定）|
| disabled      | `boolean`          | `false`   | 是否禁用整个复选框组        |