<template>
    <div>
        <MuRadioGroup v-model="selectedValue" name="fruits">
            <MuRadio value="apple" label="苹果" />
            <MuRadio value="banana" label="香蕉" />
            <MuRadio value="orange" label="橙子" />
        </MuRadioGroup>
        <p>已选择: {{ selectedValue }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MuRadio, MuRadioGroup } from "modern-ui";

const selectedValue = ref<string>('apple');
</script>
