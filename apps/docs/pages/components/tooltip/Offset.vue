<template>
    <div class="flex gap-4">
        <MuTooltip content="默认偏移量(8px)" :offset="8">
            <button>默认偏移量</button>
        </MuTooltip>
        <MuTooltip content="大偏移量(20px)" :offset="20">
            <button>大偏移量</button>
        </MuTooltip>
        <MuTooltip content="自定义偏移量[x: 10, y: 20]" :offset="[10, 20]">
            <button>自定义偏移量</button>
        </MuTooltip>
    </div>
</template>

<script setup lang="ts">
import { MuTooltip } from "modern-ui";
</script>
