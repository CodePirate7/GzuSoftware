<template>
    <div class="content">
        <school-layout>
            <h2 align="center">贵州大学省级示范性软件学院简介</h2>
            <br />
            <p style="text-indent:2em">
                贵州大学软件学院是贵州大学联合慧科集团遵照《国家中长期教
                育发展与改革纲要》中“促进高校、科研院所、企业科技教育资源共享，
                推动高校创新组织模式”, “创立高校与科研院所、行业、企业联合培养
                人才的新机制”等培养高层次信息技术人才的战略精神，大力推进教学改
                革和建设，并紧密结合贵州省加快推动以大数据、云计算、电子商务等战
                略性新兴产业发展规划精神，双方于2012年签订共建软件学院的战略合作
                协议，并经省教育厅批准正式成立的贵州省内首个省级示范性软件学院。
            </p><br />
            <p style="text-indent:2em">
                贵州大学软件学院以国家示范性软件学院的标准来规划建设，
                软件学院依托贵州大学计算机学院的学科优势和国内领先的综
                合教育服务平台——慧科集团在前沿信息技术领域的人才培养
                经验与行业资源联合共建，是贵州大学创新办学体制与机制，
                改善办学条件，加强产学研合作，调整专业结构，改革人才培养
                模式的创新实践。
            </p><br />
            <p style="text-indent:2em">
                软件学院从14年正式开始招生，目前每届学生规模200人。现
                开设有大数据技术与应用、移动云计算技术与应用、互联网营
                销与管理等行业人才紧缺的专业方向。未来将根据产业发展情
                况增设VR虚拟现实技术、智能硬件等新的专业方向，着重培养
                战略性新兴产业领域的优质、复合型高层次应用型和工程型专
                业技术人才，助力地方经济发展和前沿新兴产业发展布局，为
                贵州省乃至全国培养高层次应用型软件技术和互联网新兴技术
                领域优秀人才。
            </p><br />
            <p style="text-indent:2em">
                未来软件学院将继续深化教育改革，加强校企合作，产学
                合作，旨在将贵州大学软件学院建设成为一个能培养具有
                国际竞争力的多层次实用型软件人才培养基地，成为立足
                西部，放眼全国的一流软件学院。
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
        name: "DevIntroduction",
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
    .content{
        font-family: Lato, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,"Microsoft JhengHei", "MicrMicrosoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif;
    }
</style>