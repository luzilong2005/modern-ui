# Radio 单选框

用于在多个选项中选择单个选项。

## 基础用法
<demo vue="./Basics.vue"/>

## 禁用状态
<demo vue="./Disabled.vue"/>

## 单选框组
<demo vue="./Group.vue"/>

## 不同尺寸
<demo vue="./Sizes.vue"/>

## Radio Props 属性
| 属性名           | 类型                 | 默认值       | 说明                    |
| ------------- | ------------------ | --------- | --------------------- |
| id            | `string`           | —         | 单选框的id               |
| name          | `string`           | —         | 单选框的name             |
| label         | `string`           | —         | 单选框的标签              |
| labelPosition | `InlineInputLabelPosition` | `right`   | 标签位置，可选值为 `left`、`right` |
| size          | `RadioSize`        | `md`      | 单选框尺寸，可选值为 `sm`、`md`、`lg` |
| value         | `string`           | —         | 单选框的值（在单选框组中使用）   |
| defaultChecked| `boolean`          | `false`   | 默认是否选中              |
| disabled      | `boolean`          | `false`   | 是否禁用                 |

## Radio Events 事件
| 事件名      | 说明           | 回调参数   |
| --------- | ------------ | ------ |
| change    | 状态改变时触发     | (ev: Event, checked: boolean) |

## RadioGroup Props 属性
| 属性名           | 类型                 | 默认值       | 说明                    |
| ------------- | ------------------ | --------- | --------------------- |
| name          | `string`           | —         | 单选框组的name            |
| label         | `string`           | —         | 单选框组的标签             |
| size          | `RadioSize`        | `md`      | 单选框组尺寸，可选值为 `sm`、`md`、`lg` |
| value         | `string`           | —         | 单选框组选中的值（v-model绑定）|
| disabled      | `boolean`          | `false`   | 是否禁用整个单选框组        |
