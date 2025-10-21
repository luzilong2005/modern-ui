<style src="./Input.scss" />
<template>
    <div :class="className">
        <span
            class="mu-input__prefix"
            v-if="$slots.prefix"
        >
            <slot name="prefix"></slot>
        </span>
        <input
            class="mu-input"
            v-model="modelValue"
            type="text"
            role="text"
            ref="inputRef"
            :disabled="props.disabled"
            :placeholder="props.placeholder"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
        />
        <span
            class="mu-input__suffix"
            v-if="$slots.suffix"
        >
            <slot name="suffix"></slot>
        </span>
    </div>
</template>

<script setup lang="ts">
import { inputDefaultProps } from "./Input";
import { INPUT_NAME } from "./constants";
import type { InputEmits, InputExpose, InputProps, InputSlots } from "./types";
import { computed, useTemplateRef } from "vue";

const inputRef = useTemplateRef("inputRef");
const props = withDefaults(defineProps<InputProps>(), inputDefaultProps);
const modelValue = defineModel<string>("value", { default: "" });
const emits = defineEmits<InputEmits>();
const className = computed(() => ({
    [`mu-input`]: true,
    [`mu-input--size-${props.size}`]: !!props.size,
    [`mu-input--disabled`]: props.disabled,
}));

const handleInput = (ev: InputEvent) => {
    emits("input", ev, modelValue.value);
};

const handleFocus = (ev: FocusEvent) => {
    emits("focus", ev);
};

const handleBlur = (ev: FocusEvent) => {
    emits("blur", ev);
};

const handleClear = () => {
    emits("clear");
};

defineSlots<InputSlots>();
defineExpose<InputExpose>({
    inputRef,
    focus: () => inputRef.value?.focus(),
    blur: () => inputRef.value?.blur(),
    select: () => inputRef.value?.select(),
    clear: () => {
        if (!inputRef.value) return;
        inputRef.value.value = "";
        handleClear();
    },
});
defineOptions({
    name: INPUT_NAME,
    inheritAttrs: false,
});
</script>
