<template>
    <div>
        <MuInput placeholder="可清空的输入框" clearable v-model="inputValue" @clear="handleClear" />
    </div>
</template>

<script setup lang="ts">
import { MuInput } from "modern-ui";
import { ref } from "vue";

const inputValue = ref('初始值');

const handleClear = () => {
    console.log('输入框已清空');
};
</script>
