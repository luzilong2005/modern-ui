<template>
    <div>
        <p>当前状态: {{ isChecked }}</p>
        <MuSwitch v-model="isChecked" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MuSwitch } from "modern-ui";

const isChecked = ref(false);
</script>
