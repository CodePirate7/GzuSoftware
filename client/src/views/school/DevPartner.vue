<template>
    <div class="partner">
        <school-layout>
            <h2 align="center">慧科集团</h2>
            <br />
            <p style="text-indent:2em">
                慧科集团创立于2010年8月，是国内领先的中国
                高等教育和职业教育综合服务平台。其通过旗下
                ”慧科教育“、 “高校邦”为中国高校提供战略
                性新兴产业人才培养解决方案和在线教育智慧学
                习平台；旗下“开课吧“、”无限互联”、 “
                莱茵教育”为大学生和互联网从业者提供以职业
                发展为导向的实用技能培训；旗下“课工厂”为
                高校、教育培训机构以及企业提供在线课程制作
                服务。集团旗下设立专注教育与信息技术深度融
                合的“慧科研究院”以引擎之势助力集团持续洞
                悉和引领行业发展趋势、打造创新教育生态。
            </p>
            <br />
            <p style="text-indent:2em">
                慧科集团积极配合国家“十二五”、“十三五“
                规划中大力发展移动互联网、云计算、大数据、人
                工智能、虚拟现实等为核心的新一代信息技术等战
                略性新兴产业的需要 , 并紧扣国家“互联网 +”
                战略布局，精耕于这些领域的人才培养和教育模式
                创新。目前已自主研发并完成创新创业、前沿科技
                、“互联网+行业”等领域的十余个战略性新兴产业
                专业体系建设，打通了从教育入口到教育出口的可
                持续发展链条，构建出慧科集团特有的O2O教育生态系统。
            </p>
            <br />
            <p style="text-indent:2em">
                慧科集团目前已与1000多所全国知名高校、地方
                本专科院校开展了硕、本、专不同层次的专业共建
                、实习实训、在线教育等多种合作，为产业培养和
                输送了数万名高端创新型人才及百万名 应用型技
                术人才。同时，通过与IBM、阿里云、腾讯云、百度
                、VMware、华为等数十家国内外知名企业开展共建
                O2O 知识传播体系、定制学历教育培养项目、建立
                线下联合实验室等深度合作，为企业及其生态系统
                培养和储备人才。集政、产、学、研、用为一体的
                “慧科教育模式”已被业界高度认可。
            </p>
            <br />
            <p style="text-indent:2em">
                慧科集团于2014年3月5日获得复星昆仲资本领投的
                2000万美元A轮融资、并于 2015 年 10 月获得千合
                资本王亚伟先生领投的 3 亿元人民币 B 轮融资，20
                16年10月完成C轮融资，估值超过50亿人民币。
            </p>
            <br />

            

            <BackTop :height="100" :bottom="35">
                <div class="top">
                    <Icon type="ios-arrow-up" />
                </div>
            </BackTop>
        </school-layout>
        
    </div>
</template>

<script>
    import SchoolLayout from './SchoolLayout'
    export default {
        name: "DevPartner",
        components:{
            SchoolLayout
        }
    }
</script>
<style scoped lang="less">
    p {
        line-height: 30px;
        font-size: 16px;
    }
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
    .partner{
        font-family: Lato, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,"Microsoft JhengHei", "MicrMicrosoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif;
    }
</style>>