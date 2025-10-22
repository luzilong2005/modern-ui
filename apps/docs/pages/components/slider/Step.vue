<template>
    <div>
        <p>当前值: {{ value }}</p>
        <MuSlider v-model:value="value" :step="10" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MuSlider } from "modern-ui";

const value = ref(0);
</script>
