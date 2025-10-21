<template>
    <div>
        <MuCheckbox label="未选中的禁用状态" disabled />
        <MuCheckbox label="选中的禁用状态" disabled :default-checked="true" />
    </div>
</template>

<script setup lang="ts">
import { MuCheckbox } from "modern-ui";
</script>
