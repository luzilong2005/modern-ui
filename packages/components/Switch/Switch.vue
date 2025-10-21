<template>
    <label :class="switchClassName">
        <input
            class="mu-switch__input"
            v-model="modelValue"
            type="checkbox"
            role="switch"
            ref="inputRef"
            :name="props.name"
            :id="props.id"
            :disabled="props.disabled"
            :checked="isChecked"
            @change="handleChange"
        />
        <span
            class="mu-switch__label"
            v-if="!!props.label"
        >
            {{ props.label }}
        </span>
    </label>
</template>

<script setup lang="ts">
import { SWITCH_NAME } from "./constants";
import { switchDefaultProps } from "./Switch";
import type { SwitchEmits, SwitchExpose, SwitchProps } from "./types";
import { computed, onMounted, useTemplateRef } from "vue";

const inputRef = useTemplateRef("inputRef");
const props = withDefaults(defineProps<SwitchProps>(), switchDefaultProps);
const emits = defineEmits<SwitchEmits>();
const modelValue = defineModel<boolean>("modelValue", { default: false });
const isChecked = computed(() => modelValue.value);
const switchClassName = computed(() => ({
    [`mu-switch`]: true,
    [`mu-switch--disabled`]: props.disabled,
    [`mu-switch--checked`]: isChecked.value,
    [`mu-switch--size-${props.size}`]: !!props.size,
    [`mu-switch--label-${props.labelPosition}`]: !!props.labelPosition,
}));

const handleChange = (ev: Event) => {
    emits("change", ev, (ev.target as HTMLInputElement).checked);
};
onMounted(() => {
    modelValue.value = props.defaultChecked;
});
defineExpose<SwitchExpose>({
    inputRef
});
defineOptions({
    name: SWITCH_NAME,
    inheritAttrs: false,
});
</script>

<style lang="scss" src="./Switch.scss"></style>
