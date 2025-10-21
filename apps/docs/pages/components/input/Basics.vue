<template>
    <div>
        <MuInput placeholder="请输入内容" v-model="inputValue" />
    </div>
</template>

<script setup lang="ts">
import { MuInput } from "modern-ui";
import { ref } from "vue";

const inputValue = ref('');
</script>
