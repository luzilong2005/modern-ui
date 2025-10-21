<template>
    <div style="display: flex; gap: 2rem;">
        <MuButton disabled>Button</MuButton>
        <MuButton disabled variant="filled">Button</MuButton>
        <MuButton disabled variant="outlined">Button</MuButton>
        <MuButton disabled variant="filled" color-type="success">Button</MuButton>
        <MuButton disabled variant="outlined" color-type="danger">Button</MuButton>
    </div>
</template>

<script setup lang="ts">
import { MuButton } from 'modern-ui';
</script>
