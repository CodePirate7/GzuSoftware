<template>
    <div class="container">
        <!--        <div class="img"></div>-->
        <Layout>
            <Sider class="sider" width="240" style="background:#fff;">
                <Affix :offset-top="50">
                    <Menu class="sider-menu" theme="light" :active-name="activeName" >
                        <MenuItem name="/school/introduction" to="introduction">
                            <Icon type="ios-map" />学院简介
                        </MenuItem>
                        <MenuItem name="/school/structure" to="structure">
                            <Icon type="md-git-network" />组织结构
                        </MenuItem>
                        <MenuItem name="/school/partner" to="partner">
                            <Icon type="ios-hand" />校企合作
                        </MenuItem>
                        <MenuItem name="/school/contact" to="contact">
                            <Icon type="ios-call" />联系我们
                        </MenuItem>
                    </Menu>
                </Affix>
            </Sider>
            <Content class="content">
                <Breadcrumb>
                    <BreadcrumbItem to="/home">首页</BreadcrumbItem>
                    <BreadcrumbItem to="/school">学院概况</BreadcrumbItem>
                    <BreadcrumbItem >{{subName}}</BreadcrumbItem>
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
        data(){
            return {
                activeName: this.$route.path,
                subName: '学院简介'
            }
        },
        created(){
            this.activeName =  this.$route.path;
            let path =  this.$route.path;
            if( path.indexOf('introduction') != -1 ) this.subName = "学院简介";
            else if( path.indexOf('structure') != -1 ) this.subName = "组织结构";
            else if( path.indexOf('partner') != -1 ) this.subName = "校企合作";
            else if( path.indexOf('contact') != -1 ) this.subName = "联系我们";
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
            .sider-menu{
                /*margin-top: 20px;*/
                /*background:#f8f8f9;*/
            }
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