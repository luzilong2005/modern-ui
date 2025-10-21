import type { MESSAGE_TYPES } from "./constants";
import type { ComponentInternalInstance } from "vue";

export type MessageType = (typeof MESSAGE_TYPES)[number];
export type MessageProps = {
    id: string;
    onDestroy: () => void;
    type?: MessageType;
    delay?: number;
    content?: string;
    closable?: boolean;
};

export type MessageExpose = {
    close: () => void;
};

export type MessageHandler = {
    close: () => void;
};

export type MessageInstance = {
    id: string;
    vm: ComponentInternalInstance;
};

export type MessageCreationOptions = Omit<MessageProps, "id"|"onDestroy">;
export type MessageCreationOptionsRaw = string | MessageCreationOptions;
export type MessageCreationFn = {
    (content: string): void;
    (options: MessageCreationOptions): void;
};
export type MessageWithTypeFn = {
    [K in MessageType]: MessageCreationFn;
};
export type MessageApi = {
    create: MessageCreationFn;
} & MessageWithTypeFn;
