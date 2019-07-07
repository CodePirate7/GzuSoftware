<template>
    <div class="container">
        <!--        <div class="img"></div>-->
        <Layout>
            <Sider class="sider" width="240" style="background:#fff;">
               <Affix :offset-top="50">
                   <Menu class="sider-menu" theme="light" :active-name="activeName" >
                       <MenuItem name="/workers/teaching"  to="teaching" >
                           <Icon type="ios-search"></Icon>
                           <span>教学研究人员</span>
                       </MenuItem>
                       <MenuItem name="/workers/administrative" to="administrative" >
                           <Icon type="ios-search"></Icon>
                           <span>行政人员</span>
                       </MenuItem>
                   </Menu>
               </Affix>
            </Sider>
            <Content class="content">
                <Breadcrumb>
                    <BreadcrumbItem to="/home">首页</BreadcrumbItem>
                    <BreadcrumbItem to="/workers/teaching">学院人员</BreadcrumbItem>
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
            if( path.indexOf('teaching') != -1 ) this.subName = "教学研究人员";
            if( path.indexOf('administrative') != -1 ) this.subName = "行政人员";
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