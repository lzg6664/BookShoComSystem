<template>
    <div>
        <Nav></Nav>
        <div class="body-div">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Navigation.vue'

export default {
    components: {
        Nav,    
    }
}
</script>

<style>

</style>