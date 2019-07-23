<template>
    <div class="hh">
        <school-layout>
            <h2 align="center">贵州大学省级示范性软件学院组织架构图</h2>
            <br />
            <img src="../../assets/Str.png" />
            <BackTop :height="100" :bottom="35">
                <div class="top">
                    <Icon type="ios-arrow-up" />
                </div>
            </BackTop>
        </school-layout>
    </div>
</template>

<script>
    import SchoolLayout from './SchoolLayout'
    export default {
        name: "DevStructure",
        components:{
            SchoolLayout
        }
    }
</script>
<style scoped lang="less">
    img{
        margin-left:62px;
    }
    .top{

        
        background: rgba(199, 199, 199, .7);
        color: #fff;
        text-align: center;
        border-radius: 50%;
        width: 50px;      
        height: 50px;          
        border-radius: 50%;
        padding-top:5px;
        //-moz-border-radius: 50%;      
        //-webkit-border-radius: 50%; 


    }
</style>