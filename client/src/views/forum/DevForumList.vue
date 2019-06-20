<template>
    <div>
        <div class="dev-issue">
            <Row :gutter='16'>
                <Col span="14" offset="2">
                    <div>
                        <Card shadow style="border-radius: 10px;" class="dev-issue-item dshadow">
                            <div class="dev-issue-item-user-avatar">
                                <Poptip trigger="hover" title="Title" content="content">
                                    <a href="#" target="_blank">
                                <span>
                                 <Avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" size="small"></Avatar>
                                </span>
                                    </a>
                                </Poptip>
                            </div>
                            <div class="dev-issue-item-user-avatar">
                                <Poptip trigger="hover" title="Title" content="content">
                                    <a href="#" target="_blank">
                                        <span class="diamond">Aresn</span>
                                    </a>
                                </Poptip>
                            </div>
                            <span class="dev-time">
                07-17 23:27
              </span>
                            <div class="dev-issue-item-title">
                                <a href="/#/forum/article">写给 iView 开发者的一封信</a>
                            </div>
                            <a href="/#/forum/article" class="dev-issue-item-summary">
                                <div class="dev-issue-item-summary-cover right" style="background-image: url('https://dev-file.iviewui.com/xM14LMsynHq844vHLXuqx7VkO47hX9dO/small');"></div>
                                <div class="dev-issue-item-summary-content">
                                    你好，亲爱的 iView 开发者（准开发者），很高兴你能使用到我们新上线的 iView 开发者社区。iView 从立项到现在已经经历了两年的时间，7 月  28 日是它两周岁的生日，在这一天，我们荣幸的召开了新品发布会并发布了 iView 3.0。对于初入社区的你，这篇文章将是一个很好的导引，下面就带你玩转 iView Developer。
                                </div>
                            </a>
                            <div class="dev-issue-item-footer">
                                <div class="dev-issue-item-tags">
                                    <Tag type="border">
                    <span>
                      <img src="https://file.iviewui.com/dev/tag/tag-iview.png" alt="">
                      iView
                    </span>
                                    </Tag>
                                </div>
                                <div class="dev-issue-item-footer-comments">
                                    <Tooltip content="共61条回复">
                                        <i class="ivu-icon ivu-icon-ios-chatbubbles"></i>61
                                    </Tooltip>
                                </div>
                            </div>
                        </Card>
                        <Card  shadow style="border-radius: 10px;" class="dev-issue-item dshadow">
                            <div class="dev-issue-item-user-avatar">
                                <Poptip trigger="hover" title="Title" content="content">
                                    <a href="#" target="_blank">
                    <span>
                      <Avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" size="small"></Avatar>
                    </span>
                                    </a>
                                </Poptip>
                            </div>
                            <div class="dev-issue-item-user-avatar">
                                <Poptip trigger="hover" title="Title" content="content">
                                    <a href="#" target="_blank">
                                        <span class="diamond">Aresn</span>
                                    </a>
                                </Poptip>
                            </div>
                            <span class="dev-time">
                07-17 23:27
              </span>
                            <div class="dev-issue-item-title">
                                <a href="#" target="_blank">写给 iView 开发者的一封信</a>
                            </div>
                            <a href="#" target="_blank" class="dev-issue-item-summary">
                                <div class="dev-issue-item-summary-cover right" style="background-image: url('https://dev-file.iviewui.com/xM14LMsynHq844vHLXuqx7VkO47hX9dO/small');"></div>
                                <div class="dev-issue-item-summary-content">
                                    你好，亲爱的 iView 开发者（准开发者），很高兴你能使用到我们新上线的 iView 开发者社区。iView 从立项到现在已经经历了两年的时间，7 月  28 日是它两周岁的生日，在这一天，我们荣幸的召开了新品发布会并发布了 iView 3.0。对于初入社区的你，这篇文章将是一个很好的导引，下面就带你玩转 iView Developer。
                                </div>
                            </a>
                            <div class="dev-issue-item-footer">
                                <div class="dev-issue-item-tags">
                                    <Tag type="border">
                    <span>
                      <img src="https://file.iviewui.com/dev/tag/tag-iview.png" alt="">
                      iView
                    </span>
                                    </Tag>
                                </div>
                                <div class="dev-issue-item-footer-comments">
                                    <Tooltip content="共61条回复">
                                        <i class="ivu-icon ivu-icon-ios-chatbubbles"></i>61
                                    </Tooltip>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Col>
                <Col span="6">
                    <Affix :offset-top="76">
                        <Card shadow class="dev-issue-aside dshadow">
                            <span style="font-size:14px">登录后即可评论和写文章</span>
                            <!-- <span style="font-size:14px">欢迎你，Aresn。</span> -->
                        </Card>
                        <Card shadow class="dev-issue-aside ">
                            <Tabs type="card"
                                  :value="tabsname"
                                  :class="{'dev-issue-aside-tabs': this.tabsname=='login'}"
                                  @on-click="fn"
                            >
                                <TabPane label="登录" name="login">
                                    <Login></Login>
                                </TabPane>
                                <TabPane label="注册" name="reg">
                                    <Reg></Reg>
                                </TabPane>
                            </Tabs>

                        </Card>
                        <Button long type="success" icon="ivu-icon ivu-icon-ios-create-outline" to="/forum/add" shape="circle">
                            写文章
                        </Button>
                    </Affix>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    import Login from './DevLogin'
    import Reg from './DevReg'
    export default {
        name: "DevForumList",
        data(){
            return{
                tabsname: 'login'
            }
        },
        components:{
            Login,Reg
        },
        methods:{
            fn( name ){
                this.tabsname = name
            }
        }
    }
</script>

<style scoped lang="less">
    .dev-issue{
        width: 90%;
        margin: 10px auto;
        padding-top: 65px;

        .dev-issue-aside{
            margin-bottom: 12px;
            .dev-issue-aside-tabs{
                height: 200px;
                transition: all .3s;
            }
        }

        .dev-issue-item{
            margin-bottom: 16px;
            position: relative;

            .dev-issue-item-user-avatar{
                display: inline-block;
                margin-right: 6px;
                span.diamond{
                    color: #ef4868;
                }
            }


            .dev-time{
                font-size: 12px;
                vertical-align: middle;
                color: #808695;
            }

            .dev-issue-item-title{
                margin: 12px 0;
                font-weight: 700;
                font-size: 16px;
                a{
                    color: #17233d;
                }
            }

            .dev-issue-item-summary{
                display: block;
                color: #616776;
                overflow: hidden;
                .dev-issue-item-summary-content{
                    text-align: justify;
                }
                .right{
                    float: right;
                    margin-left: 10px;
                }
                .dev-issue-item-summary-cover {
                    width: 140px;
                    height: 77px;
                    background-size: cover;
                    background-position: 50%;
                    border-radius: 4px;
                }
            }
            .dev-issue-item-footer{
                position: relative;
                .dev-issue-item-tags{
                    margin-top: 12px;
                    img{
                        width: 12px;
                        height: 12px;
                        vertical-align: middle;
                        position: relative;
                        top: -1px;
                    }
                }
                .dev-issue-item-footer-comments{
                    font-size: 12px;
                    font-weight: 700;
                    color: #19be6b;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
            }
        }
    }
</style>