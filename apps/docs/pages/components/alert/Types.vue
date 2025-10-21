<template>
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <MuAlert type="success">成功提示</MuAlert>
        <MuAlert type="warning">警告提示</MuAlert>
        <MuAlert type="info">信息提示</MuAlert>
        <MuAlert type="error">错误提示</MuAlert>
    </div>
</template>

<script setup lang="ts">
import { MuAlert } from "modern-ui";
</script>
