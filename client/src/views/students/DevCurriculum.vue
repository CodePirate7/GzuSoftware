<template>
    <div>
        <dev-layout>
            课程设置内容
            <BackTop :height="100" :bottom="35">
                <div class="top">
                    <Icon type="ios-arrow-up" />
                </div>
            </BackTop>
        </dev-layout>
    </div>
</template>

<script>
    import DevLayout from './DevLayout'
    export default {
        name: "DevCurriculum",
        components:{
            DevLayout
        }
    }
</script>

<style scoped lang="less">
    .top{ 
        background: rgba(199, 199, 199, .7);
        color: #fff;
        text-align: center;
        border-radius: 50%;
        width: 50px;      
        height: 50px;          
        border-radius: 50%;
        padding-top:5px;
    }
</style>