# Tooltip 工具提示

用于在鼠标悬停或点击时显示额外的信息。

## 基础用法
<demo vue="./Basics.vue"/>

## 不同位置
<demo vue="./Positions.vue"/>

## 不同触发方式
<demo vue="./Triggers.vue"/>

## 不同尺寸
<demo vue="./Sizes.vue"/>

## 自定义偏移量
<demo vue="./Offset.vue"/>

## 自定义延迟
<demo vue="./Delay.vue"/>

## Props 属性
| 属性名       | 类型                 | 默认值       | 说明                    |
| --------- | ------------------ | --------- | --------------------- |
| content   | `string`           | —         | 工具提示的内容              |
| position  | `TooltipPosition`  | `bottom`  | 工具提示的位置，可选值为 `top`、`top-start`、`top-end`、`bottom`、`bottom-start`、`bottom-end`、`left`、`left-start`、`left-end`、`right`、`right-start`、`right-end` |
| size      | `TooltipSize`      | `md`      | 工具提示的尺寸，可选值为 `sm`、`md`、`lg` |
| offset    | `TooltipOffset`    | `8`       | 工具提示的偏移量，可以是数字或数组[x, y] |
| trigger   | `TooltipTrigger`   | `hover`   | 工具提示的触发方式，可选值为 `hover`、`click`、`contextmenu` |
| delay     | `TooltipDelay`     | `1000`    | 工具提示的延迟时间（毫秒）       |

## Slots 插槽
| 插槽名      | 说明           |
| --------- | ------------ |
| default   | 触发工具提示的内容     |
