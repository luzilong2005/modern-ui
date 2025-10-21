<template>
    <div>
        <button @click="showMessage">显示消息</button>
    </div>
</template>

<script setup lang="ts">
import { messageApi } from "modern-ui";

const showMessage = () => {
    messageApi.create("这是一条消息提示");
};
</script>
