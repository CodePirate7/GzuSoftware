<template>
    <div>
        <dev-header></dev-header>
        <div class="container">
            <Breadcrumb style="margin-bottom: 10px;">
                <BreadcrumbItem to="/home">首页</BreadcrumbItem>
                <BreadcrumbItem to="/information">信息</BreadcrumbItem>
                <BreadcrumbItem to="/information/news">新闻中心</BreadcrumbItem>
                <BreadcrumbItem>{{title}}</BreadcrumbItem>
            </Breadcrumb>
            <Card>
                <div slot="title" class="title">
                    <h3 class="text-clip">{{title}}</h3>
                    <div>
                        <span style="margin-right: 10px;" class="time">
                            <Icon type="md-calendar" />
                            <Time :time="createAt" type="date" v-if="isShow" />
                        </span>
                        <span class="view">
                            <Icon type="ios-eye" />{{views}}次浏览
                        </span>
                    </div>
                </div>
                <div v-html="news" class="content" ref="content"></div>
            </Card>
            <Spin size="large" fix v-if="spinShow"></Spin>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsDetail",
        created(){
            let id = this.$route.params.id;
            this.$axios.get(`/news/${id}`).then( res =>{
                this.news = res.data.data.html;
                this.title = res.data.data.title;
                this.createAt = res.data.data.createAt;
                this.isShow = true;
                this.views = res.data.data.views;
                this.spinShow = false;
            })
        },
        data(){
            return {
                news: '',
                title:'',
                createAt:'',
                isShow:false,
                views:'',
                spinShow: true
            }
        },
        updated(){
            let aP = document.getElementsByTagName('p');
            aP[0].className = 'none';
            for( let i = 0;i < aP.length; i ++){
                let children = aP[i].children[0];
                if( children ){
                    if( children.nodeName =='IMG' ) {
                        aP[i].className = 'indent';
                        aP[i+1].className = 'center';
                    }
                }
            }
            aP[aP.length - 1].className = 'right'
        }
    }
</script>

<style scoped lang="less">
    .title{
        text-align: center;
        font-family: '微软雅黑', sans-serif;
        h3{
            letter-spacing: 2.8px;
            line-height: 35px;
            font-size: 24px;
            font-weight: 300;
            color: #1469C1;
            margin-bottom: 10px;
        }
        i{
            margin-right: 5px;
            font-size: 16px;
        }
    }
    .container{
        width: 80%;
        margin: 10px auto;
    }
    .content{
        padding:0 15px;
    }
    .content/deep/img{
        width: 100%;
    }
    .content/deep/p{
        font-family: Lato, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,"Microsoft JhengHei", "MicrMicrosoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif;
        text-indent: 20px;
        margin: 10px 0;
        line-height: 25px;
    }
    .content/deep/.center{
        text-align: center;
    }
    .content/deep/.right{
        text-align: right;
    }
    .content/deep/.indent{
        text-indent: 0!important;
    }
    .content/deep/ol{
        margin-left: 15px;
        font-size: 16px;
        font-weight: 500;
    }
    .content/deep/.none{
        display: none;
    }
    .content/deep/table{
        text-align: center;
        margin: 0 auto;
        border:solid;
        border-width:1px 0 0 1px;
    }
    .content/deep/table p{
        text-indent: 0!important;
    }
    .content/deep/table td{
        border:solid;
        border-width:0 1px 1px 0;
        padding:0 5px;
    }
</style>