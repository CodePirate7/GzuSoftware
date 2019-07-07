<template>
    <div class="container">
        <!--        <div class="img"></div>-->
        <Layout>
            <Sider class="sider" width="240">
                <Menu  class="sider-menu" active-name="/training">
                    <MenuItem name="/training" to="training">
                        本科生培养
                    </MenuItem>
                    <MenuItem name="/curriculum" to="curriculum">
                        课程设置
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
            position: absolute;
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