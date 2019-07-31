<template>
    <div>
        <dev-header></dev-header>
        <div class="container">
            <Breadcrumb style="margin-bottom: 10px;">
                <BreadcrumbItem to="/home">首页</BreadcrumbItem>
                <BreadcrumbItem to="/information">学生项目</BreadcrumbItem>
                <BreadcrumbItem to="/information/news">跑跑吧</BreadcrumbItem>
                <BreadcrumbItem>{{title}}</BreadcrumbItem>
            </Breadcrumb>
            <Card>
                <div slot="title" class="title">
                    <h3 class="text-clip">基于大数据分析技术的一“跑跑吧”APP</h3>
                </div>
                <div class="content" ref="content">
                    <P>
                        <strong>获奖情况: </strong>第四届中国"互联网+"大学生创新创业大赛校级铜奖
                    </P>
                    <P>
                        <strong>团队成员: </strong>汤昊成、陈秋实、石开洪、闵佩、刘廷位、 王文豪、张菊、杨行指导老师:吴云、范琨
                    </P>
                    <P>
                        <strong>指导老师: </strong>吴云、范琨
                    </P>
                    <strong style="margin-left:20px;">项目简介: </strong>
                    <P>
                        <strong></strong> ”跑跑吧”APP是一款针对大学生群体的互助平台。 产品以智能互助系统为核心,结合校园资讯发布和轻社交功能,致力于用大数据智能推荐技术使学生高效便捷地享受校园生活。
                        智能互助系统使用大数据分析技术,结合学生的特长和习惯智能推荐最适合的订单给接单员,如:顺路任务推荐、特长任务推荐和习惯性任务推荐。以己之长助彼之短,打造最快捷
                        方便校园互助平台。校园信息板块根据不同大学的特色进行个性化定制,了解最新校讯查看新鲜活动;辅助以轻社交功能使产品更完整。
                    </P>
                        <strong>项目特色: </strong>
                    <p>大数据备限分析。高战学生活动多力三点一线，可以快速地分析出学生GPS行动模型。结合学生预设的特长标签和累计行为习惯， 给学生实时维荐最适合的订单，减少跑腿距离、提高划单完成数字，降低互助成本。真正做到助人于举手之养。</p>
                    <p>需求类型丰富:需求发布不但能实现大学生8常的拿快递、代跑腿和代购买|类的短距离物流需求;还能实现占座.修电脑组团购物、课业管疑等生活中的特殊需求 ;如果遇到危险、突发急固病紧急事件还可以使用紧急需求 ，你的需求将会设置为最高优先级y让校内'同学最快速帮你解决问题。</p>

                        <strong>设计方案: </strong>
                   <p>
                       跑跑巴由用户使用的手机APP端和管理员使用的后台管理系统网页端构成。

                       用户端由智能互助、校园信息和轻社交三大板块构成。管理系统网页端的主要功能是系统维护、数据管理和数据分析。

                       用户满APP管理装Web

                       跑跑吧APP遵循Material Design扁平化设计以滑动手势代替频繁的页面跳转。

                       用户可以发布以短距离物流为主的普通需求和以人员招募主特殊需求，还推出紧急需求，该需求将置顶显示，以最快的速度解决同学的问题。

                       “跑跑员”包含学生议证、评分系统和可视化地图。利用智能订单推荐，将任务推送给最适合的“跑跑员”。同时包合立即带。顺路带、预定带等类型。

                       校园信息板块针对不同高核单独维护辅以轻社交功能快产品更完整。

                   </p>
                </div>
            </Card>

        </div>
    </div>
</template>

<script>
    export default {
        name: "project"
    }
</script>

<style scoped lang="less">
    .container{
        width: 80%;
        margin: 10px auto;
    }
    .title{
        text-align: center;
        font-family: '微软雅黑', sans-serif;
        h3{
            letter-spacing: 2.8px;
            line-height: 35px;
            font-size: 24px;
            font-weight: 300;
            color: #1469C1;
            margin-bottom: 10px;
        }
        i{
            margin-right: 5px;
            font-size: 16px;
        }
    }
    p{

        text-indent: 20px;
        margin: 10px 0;
        line-height: 25px;
    }
    .content{
        font-family: Lato, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,"Microsoft JhengHei", "MicrMicrosoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif;
    }
</style>