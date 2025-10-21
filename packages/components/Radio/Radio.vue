<template>
    <label :class="radioClassName">
        <input
            class="mu-radio__input"
            type="radio"
            role="radio"
            ref="inputRef"
            :disabled="props.disabled"
            :id="props.id"
            :name="finalName"
            :value="props.value"
            :checked="isChecked"
            @change="handleChange"
        />
        <span
            class="mu-radio__label"
            v-if="!!props.label"
        >
            {{ props.label }}
        </span>
    </label>
</template>

<script setup lang="ts">
import { radioDefaultProps } from "./Radio";
import { RadioGroupInjectKey } from "./RadioGroup";
import { RADIO_NAME } from "./constants";
import type { RadioEmits, RadioExpose, RadioProps } from "./types";
import { computed, useTemplateRef, inject, ref } from "vue";

const inputRef = useTemplateRef("inputRef");
const radioGroupCxt = inject(RadioGroupInjectKey, null);
const props = withDefaults(defineProps<RadioProps>(), radioDefaultProps);
const emits = defineEmits<RadioEmits>();
const finalName = computed(() => props.name ?? radioGroupCxt?.name.value);
const innerChecked = ref<boolean>(props.defaultChecked);
const isChecked = computed(() => (radioGroupCxt ? radioGroupCxt.modelValue.value === props.value : innerChecked.value));
const radioClassName = computed(() => ({
    [`mu-radio`]: true,
    [`mu-radio--size-${props.size}`]: !!props.size,
    [`mu-radio--disabled`]: props.disabled,
    [`mu-radio--checked`]: isChecked.value,
    [`mu-radio--label-${props.labelPosition}`]: !!props.labelPosition,
}));
const handleChange = (ev: Event) => {
    const target = ev.target as HTMLInputElement;
    innerChecked.value = target.checked;
    if (radioGroupCxt) {
        radioGroupCxt.setModelValue(props.value);
    }
    emits("change", ev, isChecked.value);
};
defineExpose<RadioExpose>({
    inputRef,
});
defineOptions({
    name: RADIO_NAME,
    inheritAttrs: false,
});
</script>

<style src="./Radio.scss" />
