<template>
    <div>
        <dev-layout>

            <div style="margin-bottom:20px;">
                <Card shadow>
                    <p slot="title">学院设施</p>
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
            <div>
                <Card shadow>
                    <!--<h2 align="center">实验室的建设</h2>-->
                    <p slot="title">实验室建设</p>
                    <br />
                    <p>
                        软件学院实验室是秉承国家和教育部所提倡的创新创
                        业教育精神主旨，该实验室重在培养互联网+环境下既
                        掌握学科知识，又熟悉商业应用场景，而且善于利用手
                        边资源的创新型创客人才。实验室聚合全产业链力量，为
                        高校提供开放、创新、协作、共享的创客孵化平台，从而
                        服务于学生创客实训和创业萌芽，帮助他们把想法变成
                        现实，释放每一位大学生的创新能量。
                    </p>
                    <br />
                    <img src="../../assets/NO.1.png" style="width:1050px;margin-bottom:30px;" />

                    <h2 align="center">实验室平台的搭建</h2>
                    <br />
                    <h3>阿里 · 云计算实验室:</h3>
                    <p>
                        阿里云计算实验室由慧科教育联合阿里云共同建立。"阿
                        里云实验室"为学生提供云计算平台搭建以及云平台应用开发
                        的实践环境、实训案例和实际开发项目，并在教学实施、教
                        学辅导、实习安排等方面为学生提供相应的学习资源。实训
                        系统中的实验课为学生提供了一个真实的操作环境，帮助学生
                        快速体验阿里云服务，可以帮助学生可以通过完成实验课中提
                        供的各种实验，快速掌握包括云服务器、云数据库、云负载均
                        衡、云存储、云盾、云监控等云产品的操作，运维和使用。同
                        时，实验室也为学生提供了线上企业课程供学生学习，这些资
                        源为学生提供了帮助其积累前沿技术和丰富的企业实践经验，
                        为学生的就业率与就业质量提供了保障。
                    </p>
                    <br />
                    <img src="../../assets/NO.2.png" style="padding-left:30px;margin-bottom:30px" />

                    <h3>阿里 · 大数据实验室:</h3>
                    <p>
                        慧科教育与阿里云共同合作开发的阿里大数据实验室包含云计算
                        平台及大数据应用平台，提供易于维护的大数据教学、开发、分析
                        、可视化综合实训平台，集成大数据开发系统、数据挖掘系统、大
                        数据教学系统、案例分析系统等优势，从大数据应用工具、算法实
                        现、数据可视化按时实验等角度，帮助学生掌握大数据领域的基础
                        理论学习、单点技能训练和综合实战演练；并且辅以线上课程、线下
                        项目实训，形成实现专业实验教学的多层次实验体系，为用户提供完
                        整的高可用性的教学、实训、竞赛支持的解决方案。使学生在基础时
                        期能够对基于云端的架构搭建、数据分析等有更为直观的感性认识和
                        客观判断，对学生定义自身职业发展方向和获得初步职场技能都有着
                        重要的积极意义。
                    </p>
                    <br />
                    <img src="../../assets/NO.3.png" style="padding-left:80px;margin-bottom:30px" />

                    <h3>百度互联网营销实验室:</h3>
                    <p>
                        2012年，慧科教育携手百度共同创建百度互联网营销实验室。该实验
                        室配置高性能服务器和200M带宽，提供数亿条实际数据和若干动态模拟案
                        例，供学生进行仿真演练和分析,该实验室由百度提供100%真实数据，并
                        且会定时更新数据。百度互联网营销实验室将以远程网络方式接入，为学
                        生提供真实的搜索引擎推广环境，让学生在无需花费任何推广费用的前提
                        下获得搜索引擎营销的实战经验。系统内置三十多个企业项目，模拟数十
                        个行业几百个网站的动态竞争环境，完美覆盖当前互联网营销领域各种商
                        业及营销模式。而且在专业老师的带领下，还可以熟悉搜索引擎的技术机
                        制，学习其中的博弈论原理和定价机制，进而全面掌握搜索引擎营销的精
                        髓。
                    </p>
                    <br />
                    <img src="../../assets/NO.4.png" style="padding-left:280px;margin-bottom:30px" />
                </Card>
            </div>
        </dev-layout>
        <BackTop :height="100" :bottom="35">
            <div class="top">
                <Icon type="ios-arrow-up" />
            </div>
        </BackTop>
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
    .top{
        background: rgba(199, 199, 199, .7);
        color: #fff;
        text-align: center;
        border-radius: 50%;
        width: 50px;      
        height: 50px;          
        border-radius: 50%;
        padding-top:5px;
    }
</style>