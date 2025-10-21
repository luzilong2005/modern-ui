<template>
    <div>
        <button @click="showShortMessage" class="mr-2">短时间显示(1秒)</button>
        <button @click="showLongMessage">长时间显示(10秒)</button>
    </div>
</template>

<script setup lang="ts">
import { messageApi } from "modern-ui";

const showShortMessage = () => {
    messageApi.create({
        content: "这条消息只显示1秒",
        delay: 1000
    });
};

const showLongMessage = () => {
    messageApi.create({
        content: "这条消息会显示10秒",
        delay: 10000
    });
};
</script>
