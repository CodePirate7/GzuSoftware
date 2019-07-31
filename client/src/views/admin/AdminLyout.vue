<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "AdminLyout",
        created(){
            if( window.localStorage.getItem('admin') ){
                this.$router.push('/admin/home');
            }
        },
        watch: {
            '$route'(){
                if( this.$route.path == '/admin' &&  window.localStorage.getItem('admin') ) {
                    this.$router.push('/admin/home');
                }
            }
        }
    }
</script>

<style scoped>
</style>