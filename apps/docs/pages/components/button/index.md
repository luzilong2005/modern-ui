# Button 按钮

## 基本用法

描述：当被点击时，触发相应的操作。
共提供5个变种。

- Filled: 实心按钮
- Outlined: 轮廓按钮
- Ghost: 透明按钮
- Text: 文字按钮
- Light: 浅色按钮

## 基本用法
<demo vue="./Basics.vue"/>

### Variants 变种
<demo vue="./Variants.vue"/>

### Sizes 尺寸
<demo vue="./Sizes.vue"/>

### Icon 图标
<demo vue="./Icon.vue"/>

### Disabled 禁用
<demo vue="./Disabled.vue"/>

## Props 属性
| 属性名       | 类型                 | 默认值       | 说明                    |
| --------- | ------------------ | --------- | --------------------- |
| type      | `ButtonNativeType` | `button`  | 按钮原生 `type` 属性        |
| size      | `ButtonSize`       | `md`      | 按钮尺寸                  |
| variant   | `ButtonVariant`    | `basic`   | 按钮视觉风格                |
| colorType | `ButtonColorType`  | `primary` | 按钮颜色主题                |
| icon      | `Component`        | —         | 将按钮内容替换为图标（传入 Vue 组件） |
| shape     | `ButtonShape`      | `square`  | 按钮形状                  |
| block     | `boolean`          | `false`   | 是否撑满父级宽度（块级按钮）        |
| disabled  | `boolean`          | `false`   | 是否禁用按钮                |
