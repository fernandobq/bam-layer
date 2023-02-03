<script setup lang="ts">
const {message} = useHello()
</script>
<template>
    <div>
        <h1>Hello world from Nuxt 3</h1>
        <p>{{message}}</p>
        <Button>Test</Button>
    </div>
</template>
