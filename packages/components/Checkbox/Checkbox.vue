<template>
    <label :class="checkboxClassName" role="checkbox">
        <div class="mu-checkbox__wrapper">
            <input
                class="mu-checkbox__input"
                ref="inputRef"
                type="checkbox"
                role="checkbox"
                :disabled="props.disabled"
                :id="props.id"
                :name="finalName"
                :value="props.value"
                :checked="isChecked"
                @change="handleChange"
            />
            <span class="mu-checkbox__check">
                <component
                    class="mu-checkbox__check-icon"
                    :is="CheckIcon"
                    stroke-width="3"
                />
            </span>
        </div>
        <span
            class="mu-checkbox__label"
            v-if="!!props.label"
        >
            {{ props.label }}
        </span>
    </label>
</template>

<script setup lang="ts">
import { checkboxDefaultProps } from "./Checkbox";
import { CheckboxGroupInjectKey } from "./CheckboxGroup";
import { CHECKBOX_NAME } from "./constants";
import type { CheckboxEmits, CheckboxExpose, CheckboxProps } from "./types";
import { CheckIcon } from "lucide-vue-next";
import { computed, inject, ref, useTemplateRef } from "vue";

const inputRef = useTemplateRef("inputRef");
const props = withDefaults(defineProps<CheckboxProps>(), checkboxDefaultProps);
const checkboxGroupCtx = inject(CheckboxGroupInjectKey, null);
const emits = defineEmits<CheckboxEmits>();
const finalName = computed(() => (checkboxGroupCtx ? checkboxGroupCtx.name.value : props.name));
const innerChecked = ref<boolean>(props.defaultChecked);
const isChecked = computed(() => {
    const fallback = innerChecked.value;
    return checkboxGroupCtx ? checkboxGroupCtx.hasValue(props.value) : fallback;
});
const checkboxClassName = computed(() => ({
    [`mu-checkbox`]: true,
    [`mu-checkbox--size-${props.size}`]: !!props.size,
    [`mu-checkbox--checked`]: isChecked.value,
    [`mu-checkbox--disabled`]: props.disabled,
    [`mu-checkbox__label--${props.labelPosition}`]: !!props.labelPosition,
}));
const handleChange = (ev: Event) => {
    const target = ev.target as HTMLInputElement;
    innerChecked.value = target.checked;
    if (checkboxGroupCtx) {
        if (props.value) {
            checkboxGroupCtx.hasValue(props.value)
                ? checkboxGroupCtx.removeValue(props.value)
                : checkboxGroupCtx.addValue(props.value);
        }
    }
    emits("change", ev, isChecked.value);
};
defineExpose<CheckboxExpose>({
    inputRef,
});
defineOptions({
    name: CHECKBOX_NAME,
    inheritAttrs: false,
});
</script>

<style src="./Checkbox.scss" />
