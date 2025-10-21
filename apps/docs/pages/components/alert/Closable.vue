<template>
    <div>
        <MuAlert closable @close="handleClose">这是一条可关闭的提示信息</MuAlert>
    </div>
</template>

<script setup lang="ts">
import { MuAlert } from "modern-ui";

const handleClose = () => {
    console.log('Alert已关闭');
};
</script>
