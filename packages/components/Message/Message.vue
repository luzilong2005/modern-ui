<template>
    <Transition
        name="mu-message-fade-up"
        @after-leave="handleDestroy"
    >
        <div
            v-show="visible"
            ref="messageRef"
            role="alert"
            :class="className"
            :style
            :id="props.id"
        >
            <span class="mu-message__icon">
                <component
                    :is="InfoIcon"
                    :size="20"
                />
            </span>
            <div class="mu-message__content">
                {{ props.content }}
            </div>
            <span
                class="mu-message__close"
                v-if="props.closable"
                @click="handleClose"
            >
                <component
                    :is="XIcon"
                    :size="20"
                />
            </span>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { MESSAGE_NAME } from "./constants";
import type { MessageExpose, MessageProps } from "./types";
import { useTimeoutFn } from "@vueuse/core";
import { InfoIcon, XIcon } from "lucide-vue-next";
import { computed, onMounted, shallowRef, type StyleValue } from "vue";

const props = withDefaults(defineProps<MessageProps>(), {
    delay: 3000,
    type: "primary",
    closable: false,
    onDestroy: () => {},
    id: "",
});
const visible = shallowRef(false);
const className = computed(() => ({
    [`mu-message`]: true,
    [`mu-message--type-${props.type}`]: !!props.type,
}));
const style = computed<StyleValue>(() => ({}));
const handleClose = () => {
    visible.value = false;
};
const handleDestroy = () => {
    const el = document.getElementById(props.id!);
    el?.parentElement?.removeChild(el);
    props.onDestroy();
};

onMounted(() => {
    visible.value = true;
    useTimeoutFn(handleClose, props.delay);
});

defineExpose<MessageExpose>({
    close: handleClose,
});
defineOptions({
    name: MESSAGE_NAME,
    inheritAttrs: false,
});
</script>

<style src="./Message.scss" />
