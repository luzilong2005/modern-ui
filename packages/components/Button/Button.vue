<style src="./Button.scss" />

<template>
    <button
        :class="className"
        ref="buttonRef"
        :disabled="props.disabled"
        :type="props.type"
        @click="emits('click', $event)"
    >
        <template v-if="!props.icon">
            <span
                class="mu-button__left-section"
                v-if="!!$slots.leftSection"
            >
                <slot name="leftSection"></slot>
            </span>
            <span class="mu-button__default-section">
                <slot></slot>
            </span>
            <span
                class="mu-button__right-section"
                v-if="!!$slots.rightSection"
            >
                <slot name="rightSection"></slot>
            </span>
        </template>
        <span
            class="mu-button__icon"
            v-else
        >
            <component :is="props.icon" />
        </span>
    </button>
</template>

<script setup lang="ts">
import { buttonDefaultProps } from "./Button";
import { BUTTON_NAME } from "./constants";
import type { ButtonEmits, ButtonExpose, ButtonProps, ButtonSlots } from "./types";
import { computed, useTemplateRef } from "vue";

const buttonRef = useTemplateRef("buttonRef");
const props = withDefaults(defineProps<ButtonProps>(), buttonDefaultProps);
const emits = defineEmits<ButtonEmits>();
defineSlots<ButtonSlots>();
const className = computed(() => ({
    [`mu-button`]: true,
    [`mu-button--size-${props.size}`]: props.size,
    [`mu-button--variant-${props.variant}`]: props.variant,
    [`mu-button--disabled`]: props.disabled,
    [`mu-button--color-${props.colorType}`]: !!props.colorType,
    [`mu-button--icon`]: !!props.icon,
    [`mu-button--shape-${props.shape}`]: !!props.shape,
    [`mu-button--block`]: props.block,
}));
defineExpose<ButtonExpose>({ buttonRef });
defineOptions({
    name: BUTTON_NAME,
});
</script>
