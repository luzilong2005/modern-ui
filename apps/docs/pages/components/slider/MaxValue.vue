<template>
    <div>
        <div class="mb-4">
            <p>最大值为10的滑块: {{ value1 }}</p>
            <MuSlider v-model="value1" :max="10" />
        </div>
        <div class="mb-4">
            <p>最大值为50的滑块: {{ value2 }}</p>
            <MuSlider v-model="value2" :max="50" />
        </div>
        <div>
            <p>最大值为200的滑块: {{ value3 }}</p>
            <MuSlider v-model="value3" :max="200" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MuSlider } from "modern-ui";

const value1 = ref(3);
const value2 = ref(25);
const value3 = ref(100);
</script>
