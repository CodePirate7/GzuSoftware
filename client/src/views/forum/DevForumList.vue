<template>
    <div>
        <div class="dev-issue">
            <Row :gutter='16'>
                <Col span="14" offset="2">
                    <div>
                        <Card  v-for="(item,index) in articles" :key="index"
                                shadow
                                style="border-radius: 10px;"
                                class="dev-issue-item dshadow">
                            <div class="dev-issue-item-user-avatar">
                                <Poptip trigger="hover" :title="item.author.username">
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
                                        <span class="diamond">{{item.author.username}}</span>
                                    </a>
                                </Poptip>
                            </div>
                            <span class="dev-time">
                                <Time :time="item.createAt"></Time>
                            </span>
                            <div class="dev-issue-item-title">
                                <router-link :to="{ name: 'article', params: { id: item._id }}">{{item.title}}</router-link>
                            </div>
                            <router-link
                                    class="dev-issue-item-summary"
                                    :to="{ name: 'article', params: { id: item._id }}">
                                <div class="dev-issue-item-summary-content article-container"
                                     v-html="item.content"
                                >
                                </div>
                            </router-link>
                            <div class="dev-issue-item-footer">
                                <div class="dev-issue-item-tags">
                                    <Tag type="border">
                                        <span>
                                            {{item.type}}
                                        </span>
                                    </Tag>
                                </div>
                                <div class="dev-issue-item-footer-comments">
                                    <Tooltip style="margin-right: 10px;">
                                        <div slot="content">
                                            阅读数: {{item.views}}
                                        </div>
                                        <Icon type="ios-eye" /></i>{{item.views}}
                                    </Tooltip>
                                    <Tooltip :content="'共 '+item.comment.length+' 条回复'">
                                        <i class="ivu-icon ivu-icon-ios-chatbubbles"></i>{{item.comment.length}}
                                    </Tooltip>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div style="text-align: center;">
                        <Page :total="total" show-sizer
                              @on-change="handleChange"
                              @on-page-size-change="handleSizeChange"
                        />
                    </div>
                </Col>
                <Col span="6">
                    <Affix :offset-top="50">
                        <Card shadow class="dev-issue-aside dshadow" v-if="!user">
                            <span style="font-size:14px">登录后即可评论和写文章</span>
                            <!-- <span style="font-size:14px">欢迎你，Aresn。</span> -->
                        </Card>
                        <Card shadow class="dev-issue-aside" v-if="!user">
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
                        <Card shadow class="dev-issue-aside" v-if="user">
                            欢迎你, {{user.username}}
                        </Card>
                        <Card shadow class="dev-issue-aside">
                            <p slot="title">
                                <i class="ivu-icon ivu-icon-ios-options"></i> 帖子选项</p>
                            <p style="margin-bottom: 10px;">帖子类型</p>
                            <RadioGroup v-model="formItem.type">
                                <Radio label="全部">全部</Radio>
                                <Radio label="提问">提问</Radio>
                                <Radio label="文章">文章</Radio>
                            </RadioGroup>
                            <Divider />
                            <p>列表样式</p>
                            <RadioGroup v-model="formItem.listStyle">
                                <Radio label="普通">普通</Radio>
                                <Radio label="紧凑">紧凑</Radio>
                            </RadioGroup>
                        </Card>
                        <Button :disabled="!user"
                                long type="success" icon="ivu-icon ivu-icon-ios-create-outline" to="/forum/add" shape="circle">
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
    import $ from '../../libs/util'
    export default {
        name: "DevForumList",
        mounted(){
            this.user = $.getStorage('user', 2*60*60*1000).data;
            this.$axios.get('/article/0/10').then( res => {
                this.articles = res.data.data;
                this.total = res.data.total;
            })
        },
        data(){
            return{
                tabsname: 'login',
                user: '',
                articles:'',
                page: 1,
                pageSize: 10,
                total: 0,
                formItem: {
                    type: "全部",
                    listStyle:'普通'
                }

            }
        },
        components:{
            Login,Reg
        },
        methods:{
            fn( name ){
                this.tabsname = name
            },
            handleChange( page ){
                this.page = page;
                this.$axios.get(`/article/${page - 1}/${this.pageSize}`).then( res => {
                    this.articles = res.data.data;
                    this.total = res.data.total;
                    scrollTo(0,0);
                })
            },
            handleSizeChange( size ){
                this.pageSize = size;
                this.$axios.get(`/article/${this.page - 1}/${size}`).then( res => {
                    this.articles = res.data.data;
                    this.total = res.data.total;
                    scrollTo(0,0);
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .article-container {
        /*display: -webkit-box;*/
        /*word-break: break-all;*/
        /*-webkit-box-orient: vertical;*/
        /*-webkit-line-clamp: 3; //需要显示的行数*/
        /*overflow: hidden;*/
        /*text-overflow: ellipsis;*/
        max-height: 85px;
    }
    .ivu-divider-horizontal{
        margin: 15px 0;
    }
    .hidden{

    }
    .dev-issue{
        width: 90%;
        margin: 10px auto;

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


