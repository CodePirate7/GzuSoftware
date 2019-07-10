<template>
    <div class="container">
        <Layout>
            <Sider class="sider" width="240" style="background:#fff;">
                <Affix :offset-top="50">
                    <Menu class="sider-menu" :active-name="activeName">
                        <MenuItem name="/information/news" to="news">
                            新闻中心
                        </MenuItem>
                        <MenuItem name="/information/notice" to="notice">
                            通知公告
                        </MenuItem>
                    </Menu>
                </Affix>
            </Sider>
            <Content class="content">
                <Breadcrumb>
                    <BreadcrumbItem to="/home">首页</BreadcrumbItem>
                    <BreadcrumbItem to="/information">信息</BreadcrumbItem>
                    <BreadcrumbItem >新闻中心</BreadcrumbItem>
                </Breadcrumb>
                <Card style="margin-top:16px;">
                    <slot></slot>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "InformationLayout",
        data(){
            return {
                activeName: this.$route.path,
                subName: '新闻中心'
            }
        },
        created(){
            this.activeName =  this.$route.path;
            let path =  this.$route.path;
            if( path.indexOf('news') != -1 ) this.subName = "新闻中心";
            if( path.indexOf('notice') != -1 ) this.subName = "通知公告";
        }
    }
</script>

<style scoped lang="less">
    .container{
        margin: 5px auto;
        width: 90%;
    .sider{
        position: absolute;
        overflow: auto;
    }
    .content{
        margin-left: 240px;
        padding: 16px;
    }
    }
    .ivu-layout{
        background: transparent;
    }
</style>