<style lang="scss" src="./Loader.scss" />
<template>
    <div
        :class="loaderClassName"
        :style="loaderStyle"
    >
        <span class="mu-loader__spinner">
            <component :is="finalSpinner" />
        </span>
        <span
            class="mu-loader__content"
            v-if="$slots.default"
        >
            <slot></slot>
        </span>
    </div>
</template>

<script setup lang="ts">
import CircleSpinner from "./components/CircleSpinner.vue";
import DotsSpinner from "./components/DotsSpinner.vue";
import { LOADER_CONTEXT_KEY, LOADER_NAME } from "./constants";
import { loaderDefaultProps } from "./misc";
import type { LoaderContext, LoaderProps } from "./types";
import { computed, provide } from "vue";

const props = withDefaults(defineProps<LoaderProps>(), loaderDefaultProps);

const loaderClassName = computed(() => ({
    [`mu-loader`]: true,
}));
const loaderStyle = computed(() => ({
    [`--mu-loader-size`]: props.size,
}));
const finalSpinner = computed(
    () => props.customLoadingSpinner ?? (props.defaultSpinner === "circle" ? CircleSpinner : DotsSpinner),
);
provide<LoaderContext>(LOADER_CONTEXT_KEY, {
    size: computed(() => props.size ?? 10),
});
defineOptions({
    name: LOADER_NAME,
    inheritAttrs: false,
});
</script>
