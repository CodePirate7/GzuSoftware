<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu :active-name="activeName" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="/admin/users" to="users">
                        <Icon type="ios-navigate"></Icon>
                        <span>用户总览</span>
                    </MenuItem>
                    <MenuItem name="/admin/news" to="news">
                        <Icon type="ios-navigate"></Icon>
                        <span>新闻总览</span>
                    </MenuItem>
                    <MenuItem name="/admin/articles" to="articles">
                        <Icon type="ios-navigate"></Icon>
                        <span>文章总览</span>
                    </MenuItem>
                    <MenuItem name="/admin/addnews" to="addnews">
                        <Icon type="ios-navigate"></Icon>
                        <span>发布新闻</span>
                    </MenuItem>
                    <MenuItem name="/admin/banner" to="banner">
                        <Icon type="ios-navigate"></Icon>
                        <span>轮播管理</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',display:'flex',justifyContent:'space-between'}">
                    <Breadcrumb style="width:80%;">
                        <BreadcrumbItem>首页</BreadcrumbItem>
                        <BreadcrumbItem>{{nav}}</BreadcrumbItem>
                    </Breadcrumb>
                    <div style="text-align: right;">
                        欢迎你，{{admin.username}}
                    </div>
                </Header>
                <Content :style="{padding: '16px 16px 16px'}">
                    <Card shadow>
                        <slot></slot>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    import $ from '../../libs/util'
    export default {
        created(){
            let path = this.$route.path;
            this.activeName = path;
            let name = path.substring(7);
            if( name == 'users' ) this.nav = '用户总览';
            else if( name == 'news' ) this.nav = '新闻总览';
            else if( name == 'articles' ) this.nav = '文章总览';
            else if( name == "addnews" ) this.nav = "发布新闻";
            else if( name == 'banner' ) this.nav = "轮播管理";
            // this.nav = this.$route.path.ind
        },
        mounted(){
            this.admin = $.getStorage('admin', 2*60*60*1000).data;
        },
        data () {
            return {
                isCollapsed: false,
                admin:'',
                activeName: this.$route.path,
                nav:''
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script>

<style scoped>
    .layout-con{
        height: 100%;
        width: 100%;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>