<template>
    <div>
        <navBar></navBar>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import navBar from './components/navBar'
    export default {
        name: "Main",
        components: {
            navBar
        }
    }
</script>
