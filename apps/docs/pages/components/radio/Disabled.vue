<template>
    <div>
        <MuRadio value="option1" label="未选中的禁用状态" disabled />
        <MuRadio value="option2" label="选中的禁用状态" disabled :default-checked="true" />
    </div>
</template>

<script setup lang="ts">
import { MuRadio } from "modern-ui";
</script>
