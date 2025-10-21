<template>
    <div>
        <MuInput placeholder="带图标的输入框">
            <template #prefix>
                <i class="icon-search"></i>
            </template>
        </MuInput>
    </div>
</template>

<script setup lang="ts">
import { MuInput } from "modern-ui";
</script>

<style>
.icon-search::before {
    content: "🔍";
}
</style>
