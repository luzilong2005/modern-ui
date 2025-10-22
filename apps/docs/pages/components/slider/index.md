# Slider 滑块

用于在给定的范围内选择一个值。

## 基础用法
<demo vue="./Basics.vue"/>

## 禁用状态
<demo vue="./Disabled.vue"/>

## 不同尺寸
<demo vue="./Sizes.vue"/>

## 垂直方向
<demo vue="./Vertical.vue"/>

## 自定义最大值
<demo vue="./MaxValue.vue"/>

## 步长控制
<demo vue="./Step.vue"/>

## Props 属性
| 属性名       | 类型                 | 默认值       | 说明                    |
| --------- | ------------------ | --------- | --------------------- |
| size      | `SliderSize`       | `md`      | 滑块尺寸，可选值为 `sm`、`md`、`lg` |
| max       | `number`           | `100`     | 滑块最大值               |
| value     | `number`           | `0`       | 滑块当前值（v-model绑定）    |
| direction | `SliderDirection`  | `horizontal` | 滑块方向，可选值为 `horizontal`、`vertical` |
| step      | `number`           | `1`       | 滑块步长，值必须是此值的倍数    |
| disabled  | `boolean`          | `false`   | 是否禁用                 |
