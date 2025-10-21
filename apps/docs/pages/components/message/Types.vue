<template>
    <div>
        <button @click="showPrimary" class="mr-2">主要</button>
        <button @click="showSecondary" class="mr-2">次要</button>
        <button @click="showSuccess" class="mr-2">成功</button>
        <button @click="showWarning" class="mr-2">警告</button>
        <button @click="showDanger">危险</button>
    </div>
</template>

<script setup lang="ts">
import { messageApi } from "modern-ui";

const showPrimary = () => {
    messageApi.primary("这是主要消息");
};

const showSecondary = () => {
    messageApi.secondary("这是次要消息");
};

const showSuccess = () => {
    messageApi.success("操作成功");
};

const showWarning = () => {
    messageApi.warning("请注意，这是一个警告");
};

const showDanger = () => {
    messageApi.danger("操作失败，请重试");
};
</script>
