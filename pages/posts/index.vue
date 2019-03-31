<template>
    <div>Posts!</div>
</template>

<script>
    export default {
        transition: (_, from) => (! from || from.name === 'portfolio') ? 'slide-left' : 'slide-right',
    }
</script>
