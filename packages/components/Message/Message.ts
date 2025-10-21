import MessageComponent from "./Message.vue";
import { MESSAGE_TYPES } from "./constants";
import type {
    MessageApi,
    MessageCreationFn,
    MessageCreationOptions,
    MessageCreationOptionsRaw,
    MessageType,
} from "./types";
import { isString } from "es-toolkit";
import { nanoid as genId } from "nanoid";
import { createApp } from "vue";

let container: HTMLDivElement | null = null;

const normalizeOptions = (raw: MessageCreationOptionsRaw): MessageCreationOptions => {
    return isString(raw) ? { content: raw } : raw;
};

const create = (raw: MessageCreationOptionsRaw) => {
    const opts = normalizeOptions(raw);
    const id = genId();

    if (!container) {
        container = document.createElement("div");
        container.className = "mu-message-container";
        document.body.appendChild(container);
    }

    const mountNode = document.createElement("div");
    container.appendChild(mountNode);
    const instance = createApp(MessageComponent, {
        ...opts,
        id,
        onDestroy: () => {
            instance.unmount();
            mountNode.remove();
        },
    });
    instance.mount(mountNode);
};

const createTypedFn = (type: MessageType): MessageCreationFn => {
    return (content: string | MessageCreationOptions) => {
        const opts = isString(content) ? { content, type } : { ...content, type };
        create(opts);
    };
};

export const messageApi = {
    create,
    ...Object.fromEntries(MESSAGE_TYPES.map((t) => [t, createTypedFn(t)])),
} as MessageApi;
