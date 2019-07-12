<template>
    <div>
        <information-layout>
            <ul>
                <router-link v-for="(item,index) in news" :key="index"
                             :to="{ path:`/information/news/${item._id}`}" tag="li">
                    {{item.title}}
                    <div style="float: right;">
                        <Time :time="item.createAt" type="date" />
                    </div>
                </router-link>
            </ul>
            <div style="text-align: center;margin-top: 30px;">
                <Page :total="total"
                      show-sizer
                      show-total
                />
            </div>

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
               this.total = res.data.length;
            })
        },
        data(){
            return {
                news: '',
                total:0
            }
        }
    }
</script>

<style scoped lang="less">
    ul{
        li{
            list-style: none;
            margin-bottom: 10px;
            cursor: pointer;
        }
    }
</style>