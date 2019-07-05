<template>
        <div class="content">
            <dev-layout>
                    <Card :bordered="ture">
                        <img src="./NO.1.png"/>
                        <p slot="title">No border title</p>
                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                    </Card>


                    <h2 align="center">行政人员</h2>
                    <br />
                    <p style="text-indent:2em">
                        许道云（贵州大学计算机科学与技术学院院长 / 教授 / 博士生导师 / 专家委员会主任）
                    </p>
                    <br />
                    <p style="text-indent:2em">
                        秦永斌（贵州大学计算机科学与技术学院副院长 / 博士 / 副教授 / 专家委员会副主任）
                    </p>
                    <br />
                    <p style="text-indent:2em">
                        陈滢（博士 / 慧科研究院院长 / 原IBM中国研究院副院长 / 专家委员会副主任）
                    </p>
                    <br />
                    <p style="text-indent:2em">
                        姜旭平（清华大学教授 / 互联网营销奠基人）
                    </p>
                    <br />
                    <p style="text-indent:2em">
                        林仕鼎（原百度大数据首席架构师）
                    </p>
                    <br />
                    <p style="text-indent:2em">
                        欧延亮（硕士 / 原Adobe中国研发中心架构师）
                    </p>
                    <br />
                    <p style="text-indent:2em">
                        方业昌（美国FIU博士 / 慧科集团创始人）
                    </p>
                    <br />
                    <p style="text-indent:2em">
                        岳喜伟（清华大学MBA / 慧科集团CEO）
                    </p>
                    <br />
                    <p style="text-indent:2em">
                        王浩（清华大学博士 / 原IBM中国大学合作部总经理）
                    </p>
                    <br />
                    <p style="text-indent:2em">
                        管刚（清华大学博士 / 原腾讯教育事业部总经理）
                    </p>
                    <br />
                    <p style="text-indent:2em">
                        李秦伟（贵州大学计算机科学与技术学院副院长 / 教授）
                    </p>
                    <br />
                    <p style="text-indent:2em">
                        龙慧云（贵州大学计算机科学与技术学院副院长 / 博士 / 副教授）
                    </p>
                    <br />
                    <p style="text-indent:2em">
                        李智（博士 / 副教授）
                    </p>
                    <br />
                    <p style="text-indent:2em">
                        彭长根（博士 / 教授）
                    </p>
                    <br />
            </dev-layout>
        </div>
</template>


<script>
    import DevLayout from './DevLayout'
    export default {
        name: "DevAdministrative",
        components:{
            DevLayout
        }
    }
</script>

<style scoped lang="less">


    p {
        line-height: 30px;
        font-size: 16px;
    }
</style>