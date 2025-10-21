<template>
    <div style="display: flex;flex-direction: column; gap: 2rem;">
        <div style="display: flex;gap: 2rem;">
            <MuButton :icon="UserIcon"/>
            <MuButton :icon="UserIcon" variant="filled"/>
            <MuButton :icon="UserIcon" variant="light" color-type="secondary"/>
        </div>
        <div style="display: flex;gap: 2rem;">
            <MuButton shape="circle" :icon="UserIcon"/>
            <MuButton shape="circle" :icon="UserIcon" variant="filled"/>
            <MuButton shape="circle" :icon="UserIcon" variant="light" color-type="secondary"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UserIcon } from "lucide-vue-next";
import { MuButton } from "modern-ui";
</script>
