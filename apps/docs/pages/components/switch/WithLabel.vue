<template>
    <div>
        <div class="mb-4">
            <MuSwitch v-model="value1" label="标签在右侧" />
        </div>
        <div>
            <MuSwitch v-model="value2" label="标签在左侧" label-position="left" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MuSwitch } from "modern-ui";

const value1 = ref(true);
const value2 = ref(false);
</script>
