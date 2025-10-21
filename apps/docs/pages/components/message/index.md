# Message 消息提示

用于显示操作反馈信息。

## 基础用法
<demo vue="./Basics.vue"/>

## 不同类型
<demo vue="./Types.vue"/>

## 可关闭
<demo vue="./Closable.vue"/>

## 自定义持续时间
<demo vue="./Duration.vue"/>

## API 方法
| 方法名      | 说明           | 参数   |
| --------- | ------------ | ------ |
| create    | 创建一条消息     | (content: string) 或 (options: MessageCreationOptions) |
| primary   | 创建主要类型消息  | (content: string) 或 (options: MessageCreationOptions) |
| secondary | 创建次要类型消息  | (content: string) 或 (options: MessageCreationOptions) |
| success   | 创建成功类型消息  | (content: string) 或 (options: MessageCreationOptions) |
| warning   | 创建警告类型消息  | (content: string) 或 (options: MessageCreationOptions) |
| danger    | 创建危险类型消息  | (content: string) 或 (options: MessageCreationOptions) |

## MessageCreationOptions 属性
| 属性名       | 类型                 | 默认值       | 说明                    |
| --------- | ------------------ | --------- | --------------------- |
| type      | `MessageType`      | `primary` | 消息类型，可选值为 `primary`、`secondary`、`success`、`warning`、`danger` |
| content   | `string`           | —         | 消息内容                |
| delay     | `number`           | `3000`    | 消息显示时间（毫秒）        |
| closable  | `boolean`          | `false`   | 是否可关闭               |
