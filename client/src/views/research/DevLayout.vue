<template>
    <div class="container">
        <!--        <div class="img"></div>-->
        <Layout>
            <Sider class="sider" width="240">
                <Menu  class="sider-menu" active-name="/achievement">
                    <MenuItem name="/achievement" to="achievement">
                        科研成果
                    </MenuItem>
                    <MenuItem name="/research" to="research">
                        研究中心
                    </MenuItem>
                    <MenuItem name="/academic" to="academic">
                        学术活动
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
        margin: 5px auto;

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