<template>
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <MuInput placeholder="小尺寸" size="sm" />
        <MuInput placeholder="中等尺寸" size="md" />
        <MuInput placeholder="大尺寸" size="lg" />
    </div>
</template>

<script setup lang="ts">
import { MuInput } from "modern-ui";
</script>
