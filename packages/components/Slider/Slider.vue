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

const updateValue = (x: number, y: number) => {
    if (props.disabled || !trackRef.value || !thumbRef.value || props.step <= 0) return;
    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
    if (props.direction === "horizontal") {
        const { left, width } = trackRef.value.getBoundingClientRect();
        const raw = clamp((x - left) / width, 0, 1);
        const val = clamp(Math.round(raw * props.max / props.step) * props.step, 0, props.max);
        modelValue.value = val;
    } else if (props.direction === "vertical") {
        const { top, height } = trackRef.value.getBoundingClientRect();
        const raw = clamp((y - top) / height, 0, 1);
        const val = clamp(Math.round(raw * props.max / props.step) * props.step, 0, props.max);
        modelValue.value = val;
    }
};
const onTrackClick = (ev: MouseEvent) => updateValue(ev.clientX, ev.clientY);
let dragging = false;
const onMouseDown = (ev: MouseEvent) => {
    if (dragging) return;
    dragging = true;
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    ev.preventDefault();
};

const onMouseMove = (ev: MouseEvent) => updateValue(ev.clientX, ev.clientY);
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
