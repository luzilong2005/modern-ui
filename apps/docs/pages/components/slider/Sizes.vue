<template>
    <div>
        <div class="mb-4">
            <p class="mb-2">小尺寸</p>
            <MuSlider size="sm" v-model="smallValue" />
        </div>
        <div class="mb-4">
            <p class="mb-2">中等尺寸</p>
            <MuSlider size="md" v-model="mediumValue" />
        </div>
        <div>
            <p class="mb-2">大尺寸</p>
            <MuSlider size="lg" v-model="largeValue" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MuSlider } from "modern-ui";

const smallValue = ref(30);
const mediumValue = ref(50);
const largeValue = ref(70);
</script>
