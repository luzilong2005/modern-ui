<style src="./Slider.scss" />
<template>
    <div
        :class="className"
        :style
    >
        <div
            class="mu-slider__track"
            ref="trackRef"
            @click="onTrackClick"
        >
            <span
                class="mu-slider__thumb"
                ref="thumbRef"
                @mousedown="onMouseDown"
            ></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { sliderDefaultProps } from "./Slider";
import { SLIDER_NAME } from "./constants";
import type { SliderProps } from "./types";
import { computed, useTemplateRef } from "vue";

const trackRef = useTemplateRef("trackRef");
const thumbRef = useTemplateRef("thumbRef");
const props = withDefaults(defineProps<SliderProps>(), sliderDefaultProps);
const modelValue = defineModel<number>("value", { default: sliderDefaultProps.value });
const ratio = computed(() => modelValue.value / props.max);
const percent = computed(() => ratio.value * 100);
const className = computed(() => ({
    [`mu-slider`]: true,
    [`mu-slider--size-${props.size}`]: !!props.size,
    [`mu-slider--disabled`]: props.disabled,
    [`mu-slider--direction-${props.direction}`]: !!props.direction,
}));
const style = computed(() => ({
    [`--mu-slider-percent`]: percent.value,
}));

const updateValue = (x: number) => {
    if (props.disabled) return;
    if (!trackRef.value || !thumbRef.value) return;
    const { left, width } = trackRef.value.getBoundingClientRect();
    const raw = Math.max((x - left) / width, 0);
    modelValue.value = Math.min(raw * props.max, props.max);
};
const onTrackClick = (ev: MouseEvent) => updateValue(ev.clientX);
let dragging = false;
const onMouseDown = (ev: MouseEvent) => {
    if (dragging) return;
    dragging = true;
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    ev.preventDefault();
};

const onMouseMove = (ev: MouseEvent) => updateValue(ev.clientX);
const onMouseUp = () => {
    if (!dragging) return;
    dragging = false;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
};
defineOptions({
    name: SLIDER_NAME,
    inheritAttrs: false,
});
</script>
