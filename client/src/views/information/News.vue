<template>
    <div>
        <information-layout>
            <ul>
                <router-link v-for="(item,index) in news" :key="index"
                             :to="{ path:`/information/news/${item._id}`}" tag="li">
                    {{item.title}}
                </router-link>
            </ul>
        </information-layout>
    </div>
</template>

<script>
    import InformationLayout from './InformationLayout'
    export default {
        name: "News",
        components:{
            InformationLayout
        },
        created(){
            this.$axios.get('/news').then( res => {
               this.news = res.data;
            })
        },
        data(){
            return {
                news: ''
            }
        }
    }
</script>

<style scoped>

</style>