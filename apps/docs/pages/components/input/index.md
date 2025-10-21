# Input 输入框

通过鼠标或键盘输入内容。

## 基础用法
<demo vue="./Basics.vue"/>

## 禁用状态
<demo vue="./Disabled.vue"/>

## 可清空
<demo vue="./Clearable.vue"/>

## 密码框
<demo vue="./Password.vue"/>

## 带图标
<demo vue="./WithIcon.vue"/>

## 不同尺寸
<demo vue="./Sizes.vue"/>

## Props 属性
| 属性名       | 类型                 | 默认值       | 说明                    |
| --------- | ------------------ | --------- | --------------------- |
| id        | `string`           | —         | 输入框的id               |
| name      | `string`           | —         | 输入框的name             |
| label     | `string`           | —         | 输入框的标签              |
| labelPosition | `InputLabelPosition` | `left`    | 标签位置，可选值为 `left`、`top` |
| size      | `InputSize`        | `md`      | 输入框尺寸，可选值为 `sm`、`md`、`lg` |
| placeholder | `string`          | —         | 输入框占位文本             |
| type      | `string`           | `text`    | 输入框类型                |
| disabled  | `boolean`          | `false`   | 是否禁用                 |
| value     | `string`           | —         | 输入框的值（v-model绑定）    |

## Events 事件
| 事件名      | 说明           | 回调参数   |
| --------- | ------------ | ------ |
| input     | 输入值变化时触发     | (ev: InputEvent, value: string) |
| change    | 输入框失去焦点时触发  | (ev: Event, value: string) |
| focus     | 输入框获得焦点时触发  | (ev: FocusEvent) |
| blur      | 输入框失去焦点时触发  | (ev: FocusEvent) |
| clear     | 清空输入框时触发     | —      |

## Slots 插槽
| 插槽名      | 说明           |
| --------- | ------------ |
| prefix    | 输入框头部内容      |
| suffix    | 输入框尾部内容      |

## Methods 方法
| 方法名      | 说明           | 参数   |
| --------- | ------------ | ------ |
| focus     | 使input获取焦点   | —      |
| blur      | 使input失去焦点   | —      |
| select    | 选中input中的文本 | —      |
| clear     | 清空input的值    | —      |
