<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
import VueResource from 'vue-resource'

export default {
    name: 'app',
    data() {
        return {
            msg: "BẦU CỬ NGÔ GIA TỰ"
        }
    }
}
</script>

<style>

</style>
