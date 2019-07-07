<template>
    <div class="container">
        <!--        <div class="img"></div>-->
        <Layout>
            <Sider class="sider" width="240" style="background:#fff;">
                <Affix :offset-top="50">
                    <Menu  class="sider-menu" :active-name="activeName" theme="light">
                        <MenuItem name="/students/training" to="training">
                            本科生培养
                        </MenuItem>
                        <MenuItem name="/students/curriculum" to="curriculum">
                            课程设置
                        </MenuItem>
                    </Menu>
                </Affix>
            </Sider>
            <Content class="content">
                <Breadcrumb>
                    <BreadcrumbItem to="/home">首页</BreadcrumbItem>
                    <BreadcrumbItem to="/students">学生培养</BreadcrumbItem>
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
                subName: '本科生培养'
            }
        },
        created(){
            this.activeName =  this.$route.path;
            let path =  this.$route.path;
            if( path.indexOf('training') != -1 ) this.subName = "本科生培养";
            if( path.indexOf('curriculum') != -1 ) this.subName = "课程设置";
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