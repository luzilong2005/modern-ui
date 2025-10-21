<template>
    <div>
        <div class="mb-4">
            <p class="mb-2">小尺寸</p>
            <MuProgress size="sm" :value="30" />
        </div>
        <div class="mb-4">
            <p class="mb-2">中等尺寸</p>
            <MuProgress size="md" :value="50" />
        </div>
        <div>
            <p class="mb-2">大尺寸</p>
            <MuProgress size="lg" :value="70" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { MuProgress } from "modern-ui";
</script>
