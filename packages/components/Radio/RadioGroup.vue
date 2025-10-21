<template>
    <fieldset
        class="mu-radio-group"
        ref="fieldRef"
        role="radiogroup"
        :class="props.class"
        :style="props.style"
        :name="props.name"
        :disabled="props.disabled"
        :="$attrs"
    >
        <slot></slot>
    </fieldset>
</template>

<script setup lang="ts">
import { RadioGroupInjectKey } from "./RadioGroup";
import { RADIO_GROUP_NAME } from "./constants";
import type { RadioGroupExpose, RadioGroupProps } from "./types";
import { computed, provide, useTemplateRef } from "vue";

const fieldRef = useTemplateRef("fieldRef");
const props = defineProps<RadioGroupProps>();
const modelValue = defineModel<string>("value");
const setModelValue = (value?: string) => {
    value && (modelValue.value = value);
};
provide(RadioGroupInjectKey, {
    name: computed(() => props.name),
    modelValue,
    setModelValue,
});

defineExpose<RadioGroupExpose>({
    fieldRef,
});
defineOptions({
    name: RADIO_GROUP_NAME,
    inheritAttrs: false,
});
</script>

<style src="./RadioGroup.scss" />
