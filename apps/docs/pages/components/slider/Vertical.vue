<template>
    <div style="display: flex; align-items: center; height: 200px;">
        <MuSlider direction="vertical" v-model="value1" class="mr-4" />
        <MuSlider direction="vertical" v-model="value2" class="mr-4" />
        <MuSlider direction="vertical" v-model="value3" />
        <div class="ml-4">
            <p>滑块1: {{ value1 }}</p>
            <p>滑块2: {{ value2 }}</p>
            <p>滑块3: {{ value3 }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MuSlider } from "modern-ui";

const value1 = ref(30);
const value2 = ref(50);
const value3 = ref(70);
</script>
