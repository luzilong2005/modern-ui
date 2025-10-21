<template>
    <fieldset
        class="mu-checkbox-group"
        ref="fieldRef"
        role="checkbox-group"
        :name="props.name"
        :style="props.style"
        :class="props.class"
        :disabled="props.disabled"
        :="$attrs"
    >
        <slot></slot>
    </fieldset>
</template>

<script setup lang="ts">
import { CheckboxGroupInjectKey } from "./CheckboxGroup";
import { CHECKBOX_GROUP_NAME } from "./constants";
import type { CheckboxGroupExpose, CheckboxGroupProps } from "./types";
import { computed, provide, useTemplateRef } from "vue";

const fieldRef = useTemplateRef("fieldRef");
const props = defineProps<CheckboxGroupProps>();
const modelValues = defineModel<Array<string>>("values", { default: [] });

const addValue = (value?: string) => {
    if (!value) return;
    if (!modelValues.value.includes(value)) {
        modelValues.value.push(value);
    }
};

const hasValue = (value?: string) => (value ? modelValues.value.includes(value) : false);

const removeValue = (value?: string) => {
    value && modelValues.value.splice(modelValues.value.indexOf(value), 1);
};

provide(CheckboxGroupInjectKey, {
    modelValues,
    addValue,
    removeValue,
    hasValue,
    name: computed(() => props.name),
});

defineExpose<CheckboxGroupExpose>({
    fieldRef,
});
defineOptions({
    name: CHECKBOX_GROUP_NAME,
});
</script>

<style src="./CheckboxGroup.scss" />
