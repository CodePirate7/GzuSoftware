<template>
    <div class="container">
        <!--        <div class="img"></div>-->
        <Layout>
            <Sider class="sider" width="240">
                <Menu  class="sider-menu" active-name="/introduction">
                    <MenuItem name="/introduction" to="introduction">
                        学院简介
                    </MenuItem>
                    <MenuItem name="/structure" to="structure">
                        组织结构
                    </MenuItem>
                    <MenuItem name="/partner" to="partner">
                        校企合作
                    </MenuItem>
                    <MenuItem name="/contact" to="contact">
                        联系我们
                    </MenuItem>
                </Menu>
            </Sider>
            <Content class="content">
                <slot></slot>
            </Content>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "DevLayout"
    }
</script>

<style scoped lang="less">

    .container{
        width: 90%;
        margin: 1px auto;

        .img{
            background: linear-gradient(33deg, #99E5A2, #C1E3FF);
            height: 150px;
        }
        .sider{
            position: fixed;
            height: 100%;
            overflow: auto;
            z-index: 1;
            background:#f8f8f9;

            .sider-menu{
                /*margin-top: 20px;*/
                background:#f8f8f9;
            }
        }
        .content{
            margin-left: 240px;
            padding: 16px;
        }
    }
</style>