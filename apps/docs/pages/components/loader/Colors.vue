<template>
    <div>
        <div class="mb-4" style="--mu-loader-color: #3b82f6;">
            <p>蓝色</p>
            <MuLoader />
        </div>
        <div class="mb-4" style="--mu-loader-color: #ef4444;">
            <p>红色</p>
            <MuLoader />
        </div>
        <div class="mb-4" style="--mu-loader-color: #10b981;">
            <p>绿色</p>
            <MuLoader />
        </div>
        <div style="--mu-loader-color: #8b5cf6;">
            <p>紫色</p>
            <MuLoader />
        </div>
    </div>
</template>

<script setup lang="ts">
import { MuLoader } from "modern-ui";
</script>
