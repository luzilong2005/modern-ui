<template>
    <div>
        <MuCheckboxGroup v-model="selectedValues" name="fruits">
            <MuCheckbox value="apple" label="苹果" />
            <MuCheckbox value="banana" label="香蕉" />
            <MuCheckbox value="orange" label="橙子" />
        </MuCheckboxGroup>
        <p>已选择: {{ selectedValues.join(', ') }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MuCheckbox, MuCheckboxGroup } from "modern-ui";

const selectedValues = ref<string[]>(['apple']);
</script>
