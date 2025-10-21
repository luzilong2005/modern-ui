<template>
    <div class="flex gap-4">
        <MuTooltip content="悬停触发" trigger="hover">
            <button>悬停触发</button>
        </MuTooltip>
        <MuTooltip content="点击触发" trigger="click">
            <button>点击触发</button>
        </MuTooltip>
        <MuTooltip content="右键触发" trigger="contextmenu">
            <button>右键触发</button>
        </MuTooltip>
    </div>
</template>

<script setup lang="ts">
import { MuTooltip } from "modern-ui";
</script>
