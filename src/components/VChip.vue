<script lang="ts" setup>
defineProps<{ text: string }>()
</script>

<template>
    <div
            class="inline-flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-gray-700 bg-gray-100 border border-gray-300 ">
        <div class="text-xs font-normal leading-none max-w-full flex-initial">
            {{ text }}
        </div>
    </div>
</template>