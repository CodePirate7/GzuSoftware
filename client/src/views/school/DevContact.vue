<template>
    <div class="contact">
        <school-layout>
            <Card shadow>
                <p slot="title">联系我们</p>
                <p>地址 : 贵州省贵阳市花溪区花溪大道南段2708号</p>
                <p>邮政编码 : 550025</p>
                <p>电话 : +86***********</p>
                <p>邮箱 : ***********</p>
            </Card>








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
        name: "DevContact",
        components: {
            SchoolLayout
        }
    }
</script>
<style scoped lang="less">
    p {
        line-height: 25px;
        font-size: 15px;
    }

    .top {
        background: rgba(199, 199, 199, .7);
        color: #fff;
        text-align: center;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding-top: 5px;
    }

    .contact {
        font-family: Lato, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,"Microsoft JhengHei", "MicrMicrosoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif;
    }
</style>>