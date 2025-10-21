<template>
    <div>
        <div class="mb-4">
            <p>禁用状态的滑块</p>
            <MuSlider :value="50" disabled />
        </div>
    </div>
</template>

<script setup lang="ts">
import { MuSlider } from "modern-ui";
</script>
