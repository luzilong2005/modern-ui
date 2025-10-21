<template>
    <div class="flex gap-4">
        <MuTooltip content="无延迟(0ms)" :delay="0">
            <button>无延迟</button>
        </MuTooltip>
        <MuTooltip content="短延迟(500ms)" :delay="500">
            <button>短延迟</button>
        </MuTooltip>
        <MuTooltip content="默认延迟(1000ms)" :delay="1000">
            <button>默认延迟</button>
        </MuTooltip>
        <MuTooltip content="长延迟(2000ms)" :delay="2000">
            <button>长延迟</button>
        </MuTooltip>
    </div>
</template>

<script setup lang="ts">
import { MuTooltip } from "modern-ui";
</script>
