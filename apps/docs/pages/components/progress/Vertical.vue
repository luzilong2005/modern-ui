<template>
    <div style="display: flex; align-items: center; height: 200px;">
        <MuProgress direction="vertical" :value="30" class="mr-4" />
        <MuProgress direction="vertical" :value="50" class="mr-4" />
        <MuProgress direction="vertical" :value="70" />
    </div>
</template>

<script setup lang="ts">
import { MuProgress } from "modern-ui";
</script>
