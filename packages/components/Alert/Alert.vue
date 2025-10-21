<style lang="scss" src="./Alert.scss" />
<template>
    <div :class="alertClassName" role="alert">
        <header class="mu-alert__header">
            <span class="mu-alert__header__title-icon">
                <component :is="props.icon ?? CircleAlertIcon" />
            </span>
            <p class="mu-alert__header__title">
                {{ props.title }}
            </p>
            <span
                class="mu-alert__header__close-icon"
                v-if="props.closable"
                @click="handleClose"
            >
                <component :is="props.closeIcon ?? XIcon" />
            </span>
        </header>
        <main class="mu-alert__main">
            <p class="mu-alert__main__content">
                {{ props.content }}
            </p>
        </main>
    </div>
</template>

<script setup lang="ts">
import { alertDefaultProps } from "./Alert";
import { ALERT_NAME } from "./constants";
import type { AlertEmits, AlertProps } from "./types";
import { XIcon, CircleAlertIcon } from "lucide-vue-next";
import { computed } from "vue";

const props = withDefaults(defineProps<AlertProps>(), alertDefaultProps);
const emits = defineEmits<AlertEmits>();
const alertClassName = computed(() => ({
    [`mu-alert`]: true,
    [`mu-alert--variant-${props.variant}`]: !!props.variant,
    [`mu-alert--color-${props.colorType}`]: !!props.colorType,
}));

const handleClose = () => {
    emits("close");
};

defineOptions({
    name: ALERT_NAME,
    inheritAttrs: false,
});
</script>
