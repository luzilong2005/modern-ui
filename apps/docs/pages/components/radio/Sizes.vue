<template>
    <div>
        <div class="mb-4">
            <p class="mb-2">小尺寸</p>
            <MuRadio size="sm" value="small" label="小尺寸单选框" />
        </div>
        <div class="mb-4">
            <p class="mb-2">中等尺寸</p>
            <MuRadio size="md" value="medium" label="中等尺寸单选框" />
        </div>
        <div>
            <p class="mb-2">大尺寸</p>
            <MuRadio size="lg" value="large" label="大尺寸单选框" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { MuRadio } from "modern-ui";
</script>
