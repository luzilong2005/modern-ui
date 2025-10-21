<template>
    <div>
        <div class="mb-4">
            <p>当前状态: {{ isChecked ? '开启' : '关闭' }}</p>
            <MuSwitch v-model="isChecked" />
        </div>
        <div>
            <p>自动保存: {{ autoSave ? '已开启' : '已关闭' }}</p>
            <MuSwitch v-model="autoSave" label="自动保存" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MuSwitch } from "modern-ui";

const isChecked = ref(true);
const autoSave = ref(false);
</script>
