<template>
    <div>
        <button @click="showClosableMessage">显示可关闭消息</button>
    </div>
</template>

<script setup lang="ts">
import { messageApi } from "modern-ui";

const showClosableMessage = () => {
    messageApi.create({
        content: "这是一条可关闭的消息，点击右上角的关闭按钮可以关闭它",
        closable: true
    });
};
</script>
