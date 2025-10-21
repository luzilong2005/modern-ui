<template>
    <div class="flex gap-4">
        <MuTooltip content="小尺寸" size="sm">
            <button>小尺寸</button>
        </MuTooltip>
        <MuTooltip content="中等尺寸" size="md">
            <button>中等尺寸</button>
        </MuTooltip>
        <MuTooltip content="大尺寸" size="lg">
            <button>大尺寸</button>
        </MuTooltip>
    </div>
</template>

<script setup lang="ts">
import { MuTooltip } from "modern-ui";
</script>
