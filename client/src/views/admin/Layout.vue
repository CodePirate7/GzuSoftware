<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1" to="users">
                        <Icon type="ios-navigate"></Icon>
                        <span>用户总览</span>
                    </MenuItem>
                    <MenuItem name="1-2" to="news">
                        <Icon type="ios-navigate"></Icon>
                        <span>新闻总览</span>
                    </MenuItem>
                    <MenuItem name="1-3" to="articles">
                        <Icon type="ios-navigate"></Icon>
                        <span>文章总览</span>
                    </MenuItem>
                    <MenuItem name="1-4" to="addnews">
                        <Icon type="ios-navigate"></Icon>
                        <span>发布新闻</span>
                    </MenuItem>
                    <MenuItem name="1-5">
                        <Icon type="ios-navigate"></Icon>
                        <span>文章管理</span>
                    </MenuItem>
                    <MenuItem name="1-6">
                        <Icon type="ios-navigate"></Icon>
                        <span>文章评论</span>
                    </MenuItem>
                    <MenuItem name="1-7">
                        <Icon type="ios-navigate"></Icon>
                        <span>提问管理</span>
                    </MenuItem>
                    <MenuItem name="1-8">
                        <Icon type="ios-navigate"></Icon>
                        <span>提问评论</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                    <div style="text-align: right;">
                        欢迎你，{{admin.username}}
                    </div>
                </Header>
                <Content :style="{padding: '0 16px 16px'}">
                    <Breadcrumb :style="{margin: '16px 0'}">
                        <BreadcrumbItem>首页</BreadcrumbItem>
                        <BreadcrumbItem>用户管理</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
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
        mounted(){
            this.admin = $.getStorage('admin', 2*60*60*1000).data;
        },
        data () {
            return {
                isCollapsed: false,
                admin:''
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