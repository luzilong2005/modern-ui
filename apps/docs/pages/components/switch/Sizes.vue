<template>
    <div>
        <div class="mb-4">
            <p class="mb-2">小尺寸</p>
            <MuSwitch size="sm" v-model="smallValue" />
        </div>
        <div class="mb-4">
            <p class="mb-2">中等尺寸</p>
            <MuSwitch size="md" v-model="mediumValue" />
        </div>
        <div>
            <p class="mb-2">大尺寸</p>
            <MuSwitch size="lg" v-model="largeValue" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MuSwitch } from "modern-ui";

const smallValue = ref(false);
const mediumValue = ref(true);
const largeValue = ref(false);
</script>
