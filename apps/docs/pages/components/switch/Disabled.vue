<template>
    <div>
        <div class="mb-4">
            <p class="mb-2">未选中的禁用状态</p>
            <MuSwitch disabled :default-checked="false" />
        </div>
        <div>
            <p class="mb-2">选中的禁用状态</p>
            <MuSwitch disabled :default-checked="true" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { MuSwitch } from "modern-ui";
</script>
