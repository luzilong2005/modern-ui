<template>
    <div>
        <div class="mb-4">
            <MuProgress :value="progress" />
        </div>
        <div class="flex gap-2">
            <button @click="decrease" class="px-3 py-1 bg-gray-200 rounded">减少</button>
            <button @click="increase" class="px-3 py-1 bg-blue-500 text-white rounded">增加</button>
            <button @click="reset" class="px-3 py-1 bg-red-500 text-white rounded">重置</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MuProgress } from "modern-ui";

const progress = ref(30);

const decrease = () => {
    progress.value = Math.max(0, progress.value - 10);
};

const increase = () => {
    progress.value = Math.min(100, progress.value + 10);
};

const reset = () => {
    progress.value = 0;
};
</script>
