<template>
    <div>
        <div class="mb-4">
            <p>圆形加载器</p>
            <MuLoader default-spinner="circle" />
        </div>
        <div>
            <p>点状加载器</p>
            <MuLoader default-spinner="dots" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { MuLoader } from "modern-ui";
</script>
