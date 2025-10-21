<template>
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <MuAlert type="success" show-icon>成功提示</MuAlert>
        <MuAlert type="warning" show-icon>警告提示</MuAlert>
        <MuAlert type="info" show-icon>信息提示</MuAlert>
        <MuAlert type="error" show-icon>错误提示</MuAlert>
    </div>
</template>

<script setup lang="ts">
import { MuAlert } from "modern-ui";
</script>
