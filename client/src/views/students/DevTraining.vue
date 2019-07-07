<template>
    <div>
        <dev-layout>
            <Collapse v-model="value2" accordion>
                <Panel name="1" style="font-size:17px;">
                    一、关于毕业学分
                    <p slot="content" class="title">
                        1、总学分
                    </p>
                    <p slot="content">
                        每个学生必须拿到要求的最低学分才能毕业
                        （1）普通课程学分：160分
                        （2）第二课堂学分：6分
                    </p>
                    <p slot="content" class="title">
                        2、普通课程
                    </p>
                    <p slot="content">
                        普通课程分为必修课程和选修课程，这些课程处于相应的必修或选修模块中
                    </p>
                    <p slot="content">
                        （1）必修课程模块：所有同学必须学习模块中每门课程并且拿到学分，不需要在系统上选课，在课表中会自动出现
                        <table border=1>
                            <tr>
                                <th width="40px">序号</th>
                                <th width="200px">模块</th>
                                <th width="40px">学分</th>
                                <th width="100px">备注</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>通识课程-思想政治类</td>
                                <td>15</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>通识课程-军事体育类</td>
                                <td>6</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>通识课程-外语类</td>
                                <td>12</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>学科大类课程-必修</td>
                                <td>27</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>专业课程-必修</td>
                                <td>30</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>专业课程-实践教学环节</td>
                                <td>16</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>专业课程-毕业设计</td>
                                <td>7</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>总计</th>
                                <th></th>
                                <th>113</th>
                                <td></td>
                            </tr>
                        </table>
                        （2）选修课程模块：每个学生需要选修模块中的课程，并拿到该模块的最低要求的学分。选修课程必须在系统上选课，通常是在学期末选修下一个学期的课程
                        <table border=1>
                            <tr>
                                <th width="40px">序号</th>
                                <th width="200px">模块</th>
                                <th width="40px">学分</th>
                                <th width="100px">备注</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>通识课程-拓展类</td>
                                <td>8</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>学科大类课程-选修</td>
                                <td>6</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>专业课程-选修</td>
                                <td>9</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>个性课程</td>
                                <td>21</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>创新创业课程</td>
                                <td>3</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>总计</th>
                                <th></th>
                                <th>47</th>
                                <td></td>
                            </tr>
                        </table>
                    </p>
                    <p slot="content" class="title">
                        3、第二课堂
                    </p>
                    <p slot="content">
                        第二课堂学分也分为必修与选修课程
                        <table border="1">
                            <tr>
                                <th width="40px">序号</th>
                                <th width="200px">模块</th>
                                <th width="40px">学分</th>
                                <th width="100px">备注</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>第二课堂-必修</td>
                                <td>2</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>第二课堂-选修</td>
                                <td>4</td>
                                <td>见后面说明</td>
                            </tr>
                            <tr>
                                <th>总计</th>
                                <th></th>
                                <th>6</th>
                                <td></td>
                            </tr>

                        </table>
                    </p>

                </Panel>
                <Panel name="2" style="font-size:17px;">
                    二、个性选修课程的说明
                    <p slot="content">软件学院将在大二上学期进行分班，学生可选择三个后续学习方向：大数据技术、移动云计算、互联网营销</p>
                    <p slot="content">三个方向除了个性课程模块中要学的课程不一样外，其他都一样。每个方向必须修学所要求的个性课程，见下表。（不是自己方向的个性课程不要选修）</p>
                    <p slot="content">
                        <table border="1">
                            <tr>
                                <th width="40px">序号</th>
                                <th width="200px">课程</th>
                                <th width="65px">开课学期</th>
                                <th width="40px">学分</th>
                                <th width="80px">大数据技术</th>
                                <th width="80px">移动云计算</th>
                                <th width="80px">互联网营销</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>企业商务系统开发实战</td>
                                <td>5</td>
                                <td>2</td>
                                <td><Icon type="md-checkmark" /></td>
                                <td><Icon type="md-checkmark" /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>大数据技术原理</td>
                                <td>7</td>
                                <td>2</td>
                                <td><Icon type="md-checkmark" /></td>
                                <td><Icon type="md-checkmark" /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>数据仓库与数据挖掘技术</td>
                                <td>7</td>
                                <td>2</td>
                                <td><Icon type="md-checkmark" /></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>机器学习与模式识别</td>
                                <td>8</td>
                                <td>2</td>
                                <td><Icon type="md-checkmark" /></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>大数据分析技术</td>
                                <td>8</td>
                                <td>2</td>
                                <td><Icon type="md-checkmark" /></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>多元统计分析与R语言建模</td>
                                <td>8</td>
                                <td>2</td>
                                <td><Icon type="md-checkmark" /></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Hadoop系统实践</td>
                                <td>9</td>
                                <td>3</td>
                                <td><Icon type="md-checkmark" /></td>
                                <td><Icon type="md-checkmark" /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>大数据分析实践专业课程-选修</td>
                                <td>9</td>
                                <td>4</td>
                                <td><Icon type="md-checkmark" /></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Oracle数据库系统</td>
                                <td>5</td>
                                <td>3</td>
                                <td></td>
                                <td><Icon type="md-checkmark" /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>移动云计算导论</td>
                                <td>6</td>
                                <td>2</td>
                                <td><Icon type="md-checkmark" /></td>
                                <td><Icon type="md-checkmark" /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Java Web企业级开发</td>
                                <td>7</td>
                                <td>4</td>
                                <td></td>
                                <td><Icon type="md-checkmark" /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>移动商务系统开发</td>
                                <td>7</td>
                                <td>4</td>
                                <td></td>
                                <td><Icon type="md-checkmark" /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>云计算虚拟化技术</td>
                                <td>8</td>
                                <td>2</td>
                                <td></td>
                                <td><Icon type="md-checkmark" /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>典型云平台</td>
                                <td>8</td>
                                <td>2</td>
                                <td></td>
                                <td><Icon type="md-checkmark" /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>网络营销概论</td>
                                <td>5</td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td><Icon type="md-checkmark" /></td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>营销管理</td>
                                <td>7</td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td><Icon type="md-checkmark" /></td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>搜索引擎优化（SEO）</td>
                                <td>7</td>
                                <td>3</td>
                                <td></td>
                                <td></td>
                                <td><Icon type="md-checkmark" /></td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>搜索引擎营销（SEM）</td>
                                <td>8</td>
                                <td>3</td>
                                <td></td>
                                <td></td>
                                <td><Icon type="md-checkmark" /></td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>网络整合营销传播</td>
                                <td>8</td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td><Icon type="md-checkmark" /></td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>PHP动态网站开发</td>
                                <td>8</td>
                                <td>4</td>
                                <td></td>
                                <td></td>
                                <td><Icon type="md-checkmark" /></td>
                            </tr>
                            <tr>
                                <td>21</td>
                                <td>在线消费行为分析</td>
                                <td>9</td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td><Icon type="md-checkmark" /></td>
                            </tr>
                            <tr>
                                <td>22</td>
                                <td>营销效果评估与分析</td>
                                <td>9</td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td><Icon type="md-checkmark" /></td>
                            </tr>
                            <tr>
                                <td>23</td>
                                <td>商用营销方案策划</td>
                                <td>9</td>
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td><Icon type="md-checkmark" /></td>
                            </tr>
                        </table>
                        注：每个方向学分略有不同，最低21分
                    </p>
                </Panel>
                <Panel name="3" style="font-size:17px;">
                    三、创新创业课程的说明
                    <p slot="content">创新创业课程学院实际只开三门，共3学分，每个学生都必须选修。学习形式一般为研讨、讲座、在线学习</p>
                    <p slot="content">
                        <table border="1">
                            <tr>
                                <th width="40px">序号</th>
                                <th width="200px">课程</th>
                                <th width="40px">学分</th>
                                <th width="250px">开课时间</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>前沿讲座</td>
                                <td>1</td>
                                <td>大一小学期</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>新生研讨课</td>
                                <td>1</td>
                                <td>大一小学期</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>团队激励与沟通</td>
                                <td>1</td>
                                <td>大三下学期</td>
                            </tr>
                        </table>
                    </p>
                </Panel>
                <Panel name="4" style="font-size:17px;">
                    四、第二课堂学分的说明
                    <p slot="content" class="title">1、必修课程2学分，由学校开设</p>
                    <p slot="content" class="title">2、选修课程4学分，课外完成，获得条件如下：</p>
                    <p slot="content">
                        <table border="1">
                            <tr>
                                <th width="40px">序号</th>
                                <th width="200px">课外活动名称</th>
                                <th colspan="2">要求</th>
                                <th width="80px">课外学分</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>社会实践</td>
                                <td style="width:400px" colspan="2">
                                    到企业、事业单位、政府机关等进行社会实践（以调研为主，也可以是实习或参加公益活动等），提交1000字左右心得（手写或打印均可，可附图片），并由实践所在单位出具证明（必须盖章）
                                    注：大二小学期开设，需在系统中选修
                                </td>
                                <td colspan="2">1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>英语</td>
                                <td colspan="2">参加六级考试，分数达到425分以上</td>
                                <td colspan="2">2</td>
                            </tr>
                            <tr>
                                <td rowspan="2">3</td>
                                <td rowspan="2">软件水平考试</td>
                                <td colspan="2">获中级资格证书</td>
                                <td colspan="2">2</td>
                            </tr>
                            <tr>
                                <td colspan="2">获高级资格证书</td>
                                <td colspan="2">4</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>计算机等级考试</td>
                                <td colspan="2">获二级Office高级应用证书</td>
                                <td colspan="2">1</td>
                            </tr>
                            <tr>
                                <td rowspan="8">5</td>
                                <td rowspan="8">竞赛（限计算机专业相关，以下竞赛可以认定：程序设计竞赛、机器人竞赛、数学建模竞赛、信息安全竞赛、“互联网+”竞赛、泛珠三角计算机作品赛）</td>
                                <td rowspan="2">院、校级</td>
                                <td>一等奖</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>二、三等奖</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td rowspan="3">省级</td>
                                <td>一等奖</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>二等奖</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>三等奖</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td rowspan="3">全国级</td>
                                <td>一等奖</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>二等奖</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>三等奖</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td rowspan="3">6</td>
                                <td rowspan="3">科研实践</td>
                                <td colspan="2">参加SRT项目，根据学院规定给分</td>
                                <td rowspan="3">1~3</td>
                            </tr>
                            <tr>
                                <td colspan="2">参与导师科研，须为项目合同参与人员 </td>
                            </tr>
                            <tr>
                                <td colspan="2">以第一作者发表论文</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>素质拓展</td>
                                <td colspan="2">参加学校团委组织的活动，或参加学校各类社团活动，达到规定次数</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>CCF CSP认证</td>
                                <td colspan="2">获得120分以上</td>
                                <td>2</td>
                            </tr>
                        </table>
                    </p>
                </Panel>
                <Panel name="5" style="font-size:17px;">
                    五、其他注意事项
                    <p slot="content">
                        1、由于大四要外出实习，每位同学应在前三年中拿到每个必修和选修模块的学分
                    </p>
                    <p slot="content">
                        2、校级通识选修课程（共8学分）有名额限制，经常有抢不到课的情况，每次通知选课时要抓紧。（专业选修和院级选修课程也有名额限制）
                    </p>
                    <p slot="content">
                        3、校级通识课程最好在大一、大二期间就修满，注意不要选计算机类的课程
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

        name: "DevTrainning",
        components:{
            DevLayout
        }

    }
</script>

<style scoped lang="less">
    table{
        border-collapse :collapse ;
        margin-bottom:15px;
    }
    td {
        text-align: center;
    }
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