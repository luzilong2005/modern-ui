<template>
    <div style="display: flex; gap: 1rem;">
        <template v-for="item in CHECKBOX_SIZES" :key="item">
            <MuCheckbox :size="item" :label="item"/>
        </template>
    </div>
</template>

<script setup lang="ts">
import { MuCheckbox,CHECKBOX_SIZES } from "modern-ui";
</script>
