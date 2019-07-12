<template>
    <div class="container">
        <!--        <div class="img"></div>-->
        <Layout>
            <Sider class="sider" width="240" style="background:#fff;">
                <Affix :offset-top="50">
                    <Menu class="sider-menu" :active-name="activeName" theme="light">
                        <MenuItem name="/research/stuachievement" to="stu-achievement">
                            <Icon type="ios-list-box" />学生项目成果
                        </MenuItem>
                        <MenuItem name="/research/tachievement" to="tea-achievement">
                            <Icon type="ios-list-box" />老师项目成果
                        </MenuItem>
                        <MenuItem name="/research/research" to="research">
                            <Icon type="md-planet" />研究中心
                        </MenuItem>
                        <MenuItem name="/research/academic" to="academic">
                            <Icon type="md-walk" />学术活动
                        </MenuItem>
                    </Menu>
                </Affix>
            </Sider>
            <Content class="content">
                <Breadcrumb>
                    <BreadcrumbItem to="/home">首页</BreadcrumbItem>
                    <BreadcrumbItem to="/research">学术研究</BreadcrumbItem>
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
            if( path.indexOf('research') != -1 ) this.subName = "研究中心";
            if( path.indexOf('academic') != -1 ) this.subName = "学术活动";
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