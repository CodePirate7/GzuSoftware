<template>
    <div>
        <dev-layout>
            <Collapse v-model="value2" accordion>
                <Panel name="1" style="font-size:17px;">
                    一、大数据专业培养计划
                    <p slot="content" class="title">培养目标：</p>
                    <p slot="content">
                        培养具备最新思维和技能的大数据技术应用型人才，使学生具备扎
                        实的数理统计、数据仓库、数据挖掘、数据处理与展现的基础，掌
                        握大数据相关技术的基本理论、基本技能以及这些理论与技能的综
                        合应用方法（如商业智能系统等），使学生能够应用基于Hadoop大
                        数据平台的相关技术，同时掌握能够与企业中大数据分析与应用的
                        项目开发等相关工作岗位匹配的工作技能。
                    </p>
                    <p slot="content" class="title">就业岗位：</p>
                    <p slot="content">
                        数据科学家、数据分析师、数据架构师、数据工程师、统计分析师、业务分析师、数据分析经理
                    </p>
                    <p slot="content">
                        <img src="../../assets/student-curr-1.png" style="margin-top:20px;margin-bottom:30px;margin-left:20px;" />
                        <img src="../../assets/student-curr-2.png" style="margin-top:20px;margin-left:20px;" />
                    </p>
                </Panel>
                <Panel name="2" style="font-size:17px;">
                    二、移动云计算专业培养计划
                    <p slot="content" class="title">培养目标：</p>
                    <p slot="content">
                        本专业将云计算、移动开发与架构、软件架构、
                        人机交互设计等相结合，重视培养学生云计算解决方案、云端软件
                        架构设计、移动终端应用软件的架构与设计、移动云应用产品的设
                        计等能力，使学生具备商业级应用软件的服务产品架构和设计能力。
                    </p>
                    <p slot="content" class="title">就业岗位：</p>
                    <p slot="content">
                        云计算软件开发工程师、云计算存储与数据工程师、
                        云计算业务需求工程师、云计算架构师、云计算存储
                        与数据架构师、云计算高端运维工程师、高级虚拟化
                        工程师
                    </p>
                    <p slot="content">
                        <img src="../../assets/student-curr-3.png" style="margin-top:20px;margin-bottom:30px;margin-left:20px;" />
                        <img src="../../assets/student-curr-4.png" style="margin-top:20px;margin-left:20px;" />
                    </p>
                </Panel>
                <Panel name="3" style="font-size:17px;">
                    三、互联网营销专业培养计划
                    <p slot="content" class="title">培养目标：</p>
                    <p slot="content">
                        以互联网为基础，利用数字化的信息和网络媒体的交
                        互性来实现营销目标的新兴"互联网+"前沿专业，旨在培养具备营销型网站
                        建设、网页设计、营销推广、网络服务与管理能力，能够胜任网站维护与
                        优化、网站推广、网络营销策划、网络咨询等工作的懂技术、懂营销、懂
                        管理的实用型互联网营销人才
                    </p>
                    <p slot="content" class="title">就业岗位：</p>
                    <p slot="content">
                        搜索引擎优化工程师、SEM竞价专员、新媒体运营、移动营销、文案策划、
                        商务网站策划、网络推广、网站运维 、商务拓展
                    </p>
                    <p slot="content">
                        <img src="../../assets/student-curr-5.png" style="margin-top:20px;margin-bottom:30px;margin-left:20px;" />
                        <img src="../../assets/student-curr-6.png" style="margin-top:20px;margin-left:20px;" />
                    </p>
                </Panel>
            </Collapse>



            <BackTop :height="100" :bottom="35">
                <div class="top">
                    <Icon type="ios-arrow-up" />
                </div>
            </BackTop>
        </dev-layout>
    </div>
</template>

<script>
    import DevLayout from './DevLayout'
    export default {
        data () {
            return {
                value2: '1'
            }
        },
        name: "DevCurriculum",
        components:{
            DevLayout
        }
    }
</script>

<style scoped lang="less">
    .title{        
        color:#2d8cf0;
        font-size:16px;
    }
    p {
        line-height: 30px;
        font-size: 14px;
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
</style>