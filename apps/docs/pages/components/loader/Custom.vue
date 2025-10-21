<template>
    <div>
        <div class="mb-4">
            <p>自定义加载器</p>
            <MuLoader :custom-loading-spinner="CustomSpinner" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { MuLoader } from "modern-ui";
import { Loader2 } from "lucide-vue-next";

// 自定义加载器组件
const CustomSpinner = Loader2;
</script>
