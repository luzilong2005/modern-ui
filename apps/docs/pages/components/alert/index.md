# Alert 警告提示

用于页面中展示重要的提示信息。

## 基础用法
<demo vue="./Basics.vue"/>

## 不同类型
<demo vue="./Types.vue"/>

## 可关闭
<demo vue="./Closable.vue"/>

## 带图标
<demo vue="./WithIcon.vue"/>

## Props 属性
| 属性名       | 类型                 | 默认值       | 说明                    |
| --------- | ------------------ | --------- | --------------------- |
| title      | `string`           | —         | 警告提示的标题              |
| content    | `string`           | —         | 警告提示的内容              |
| variant    | `AlertVariant`     | `filled`  | 警告提示的变体，可选值为 `filled`、`outlined` |
| colorType  | `AlertColorType`   | `primary` | 警告提示的颜色类型，可选值为 `primary`、`success`、`danger`、`warning`、`secondary` |
| closable   | `boolean`          | `true`    | 是否可关闭                 |
| icon       | `Component`        | —         | 自定义图标组件              |
| closeIcon  | `Component`        | —         | 自定义关闭图标组件           |

## Events 事件
| 事件名      | 说明           | 回调参数   |
| --------- | ------------ | ------ |
| close     | 关闭时触发       | —      |
