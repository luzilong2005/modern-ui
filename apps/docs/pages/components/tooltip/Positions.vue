<template>
    <div class="flex flex-wrap gap-4">
        <div class="flex flex-col items-center">
            <MuTooltip content="顶部" position="top">
                <button>top</button>
            </MuTooltip>
        </div>
        <div class="flex flex-col items-center">
            <MuTooltip content="顶部左侧" position="top-start">
                <button>top-start</button>
            </MuTooltip>
        </div>
        <div class="flex flex-col items-center">
            <MuTooltip content="顶部右侧" position="top-end">
                <button>top-end</button>
            </MuTooltip>
        </div>
        <div class="flex flex-col items-center">
            <MuTooltip content="底部" position="bottom">
                <button>bottom</button>
            </MuTooltip>
        </div>
        <div class="flex flex-col items-center">
            <MuTooltip content="底部左侧" position="bottom-start">
                <button>bottom-start</button>
            </MuTooltip>
        </div>
        <div class="flex flex-col items-center">
            <MuTooltip content="底部右侧" position="bottom-end">
                <button>bottom-end</button>
            </MuTooltip>
        </div>
        <div class="flex flex-col items-center">
            <MuTooltip content="左侧" position="left">
                <button>left</button>
            </MuTooltip>
        </div>
        <div class="flex flex-col items-center">
            <MuTooltip content="左侧顶部" position="left-start">
                <button>left-start</button>
            </MuTooltip>
        </div>
        <div class="flex flex-col items-center">
            <MuTooltip content="左侧底部" position="left-end">
                <button>left-end</button>
            </MuTooltip>
        </div>
        <div class="flex flex-col items-center">
            <MuTooltip content="右侧" position="right">
                <button>right</button>
            </MuTooltip>
        </div>
        <div class="flex flex-col items-center">
            <MuTooltip content="右侧顶部" position="right-start">
                <button>right-start</button>
            </MuTooltip>
        </div>
        <div class="flex flex-col items-center">
            <MuTooltip content="右侧底部" position="right-end">
                <button>right-end</button>
            </MuTooltip>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MuTooltip } from "modern-ui";
</script>
