<template>
    <div>
        <div class="mb-4">
            <p>当前值: {{ value }}</p>
            <MuSlider v-model="value" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MuSlider } from "modern-ui";

const value = ref(30);
</script>
