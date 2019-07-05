<template>
    <div class="container">
        <!--        <div class="img"></div>-->
        <Layout>
            <Sider class="sider" width="240">
                <Menu class="sider-menu" active-name="/teaching">
                    <MenuItem name="/teaching" to="teaching">
                        教学研究人员
                    </MenuItem>
                    <MenuItem name="/administrative" to="administrative">
                        行政人员
                    </MenuItem>
                </Menu>
            </Sider>
            <Content class="content">
                <slot></slot>
            </Content>
        </Layout>
    </div>
</template>

<script>export default {
        name: "DevLayout"
    }</script>

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