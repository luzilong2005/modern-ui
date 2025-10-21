<template>
    <div
        :class="progressClassName"
        :style="progressStyle"
    >
        <div class="mu-progress__bar"></div>
    </div>
</template>

<script setup lang="ts">
import { progressDefaultProps } from "./Progress";
import { PROGRESS_NAME } from "./constants";
import type { ProgressProps } from "./types";
import { computed } from "vue";

const props = withDefaults(defineProps<ProgressProps>(), progressDefaultProps);
const percent = computed(() => Math.min(Math.round(Math.abs(props.value / props.max) * 100), props.max));
const progressClassName = computed(() => ({
    [`mu-progress`]: true,
    [`mu-progress--size-${props.size}`]: !!props.size,
    [`mu-progress--${props.direction}`]: !!props.direction,
}));
const progressStyle = computed(() => ({
    [`--mu-progress-percent-value`]: percent.value,
}));
defineOptions({
    name: PROGRESS_NAME,
    inheritAttrs: false,
});
</script>

<style src="./Progress.scss"></style>
