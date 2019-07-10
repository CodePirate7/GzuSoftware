<template>
    <div class="container">
        <!--        <div class="img"></div>-->
        <Layout>
            <Sider class="sider" width="240" style="background:#fff;">
                <Affix :offset-top="50">
                    <Menu class="sider-menu" :active-name="activeName">
                        <MenuItem name="/enandem/enrollment" to="enrollment">
                            <Icon type="md-pie" />就业信息
                        </MenuItem>
                        <MenuItem name="/enandem/employment" to="employment">
                            <Icon type="md-person-add" />招生信息
                        </MenuItem>
                    </Menu>
                </Affix>
            </Sider>
            <Content class="content">
                <Breadcrumb>
                    <BreadcrumbItem to="/home">首页</BreadcrumbItem>
                    <BreadcrumbItem to="/enandem">招生就业</BreadcrumbItem>
                    <BreadcrumbItem >{{subName}}</BreadcrumbItem>
                </Breadcrumb>
                <Card style="margin-top:16px;">
                    <slot></slot>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>export default {
    data(){
        return {
            activeName: this.$route.path,
            subName: '学院简介'
        }
    },
    created(){
        this.activeName =  this.$route.path;
        let path =  this.$route.path;
        if( path.indexOf('enrollment') != -1 ) this.subName = "就业信息";
        if( path.indexOf('employment') != -1 ) this.subName = "招生信息";
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