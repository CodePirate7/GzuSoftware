<template>
    <div>
        <dev-layout>
           
            <div style="margin-bottom:20px;">
                <Card>
                    <p slot="title" style="color: #1469C1;">学院设施</p>
                    <row :gutter="50">
                        <Col span="12">
                        <Card>
                            <img src="../../assets/ft1.jpg" alt="Alternate Text" style="width:400px;" />
                        </Card>
                        </Col>
                        <Col span="12">
                        <Card>
                            <img src="../../assets/ft3.jpg" alt="Alternate Text" style="width:463px; height:275px;" />
                        </Card>
                        </Col>
                    </row>
                </Card>
            </div>
        </dev-layout>
    </div>
</template>

<script>
    import DevLayout from './DevLayout'
    export default {
        name: "DevResearch",
        components:{
            DevLayout
        }
    }
</script>

<style scoped lang="less">


</style>