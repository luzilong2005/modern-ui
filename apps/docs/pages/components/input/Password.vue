<template>
    <div>
        <MuInput type="password" placeholder="请输入密码" show-password v-model="password" />
    </div>
</template>

<script setup lang="ts">
import { MuInput } from "modern-ui";
import { ref } from "vue";

const password = ref('');
</script>
