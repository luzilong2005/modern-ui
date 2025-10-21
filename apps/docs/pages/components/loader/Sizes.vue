<template>
    <div>
        <div class="mb-4">
            <p>小尺寸</p>
            <MuLoader :size="0.5" />
        </div>
        <div class="mb-4">
            <p>默认尺寸</p>
            <MuLoader :size="1" />
        </div>
        <div>
            <p>大尺寸</p>
            <MuLoader :size="2" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { MuLoader } from "modern-ui";
</script>
