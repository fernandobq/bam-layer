<script lang="ts" setup>
import Glide from '@glidejs/glide'

onMounted(() => {
    new Glide('.glide').mount()
})

</script>
<template>
    <div class="glide container">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide">0</li>
                <li class="glide__slide">1</li>
                <li class="glide__slide">2</li>
            </ul>
        </div>
    </div>
</template>

<style scoped >

</style>
