<template>
    <div :class="tooltipClassName">
        <span
            class="mu-tooltip__trigger"
            ref="trigger"
        >
            <slot></slot>
        </span>
        <span
            class="mu-tooltip__content"
            v-if="isOpen"
            ref="content"
            :style="floatingStyles"
        >
            {{ props.content }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { usePopperDelayedState } from "../_internal/Popper";
import { TOOLTIP_NAME } from "./constants";
import { tooltipDefaultProps } from "./Tooltip";
import type { TooltipProps } from "./types";
import { useFloating, offset, type OffsetOptions, flip } from "@floating-ui/vue";
import { computed, useTemplateRef } from "vue";

const triggerRef = useTemplateRef("trigger");
const contentRef = useTemplateRef("content");
const props = withDefaults(defineProps<TooltipProps>(), tooltipDefaultProps);
const { isClicked, isContextmenu, isHovered } = usePopperDelayedState(triggerRef, props.delay);

const isOpen = computed(() => {
    switch (props.trigger) {
        case "hover":
            return isHovered.value;
        case "click":
            return isClicked.value;
        case "contextmenu":
            return isContextmenu.value;
        default:
            return false;
    }
});

const finalPopperOffset = computed<OffsetOptions>(() => {
    if (!props.offset) return 0;
    return typeof props.offset === "number"
        ? {
              mainAxis: props.offset,
          }
        : { mainAxis: props.offset[0], crossAxis: props.offset[1] };
});

const { floatingStyles } = useFloating(triggerRef, contentRef, {
    placement: props.position,
    middleware: [offset(finalPopperOffset.value), flip()],
    open: isOpen.value,
});

const tooltipClassName = computed(() => ({
    [`mu-tooltip`]: true,
    [`mu-tooltip--size-${props.size}`]: !!props.size,
}));

defineOptions({
    name: TOOLTIP_NAME,
    inheritAttrs: false,
});
</script>

<style src="./Tooltip.scss" />
