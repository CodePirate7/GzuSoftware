<template>
    <div class="about">
        <div class="dev-issue">
            <Row :gutter="16">
                <Col span="24">
                        <div class="dev-issue-main">
                            <div class="dev-issue-main-avatar">
                                <div class="dev-user-pop">
                                    <Poptip trigger="hover" :title="article.author.username" content="content">
                                        <a href="#" target="_blank">
                                            <Avatar shape="square" size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                                        </a>
                                    </Poptip>
                                </div>
                            </div>
                            <div class="dev-issue-main-content">
                                <Card shadow>
                                    <div style="margin-bottom: 5px;">
                                        <h2>{{article.title}}</h2>
                                    </div>
                                    <div class="dev-issue-main-content-info">
                                        <span class="dev-userinfo">
                                            {{article.author.username}}
                                        </span>
                                        <span class="dev-time">
                                            <Time :time="article.createAt"></Time>
                                        </span>
                                    </div>
                                    <div class="dev-md dev-article-content">
                                        <div v-html="article.content"></div>
                                    </div>
                                    <div style="text-align: right;font-size: 12px;">
                                        阅读数: {{article.views}}
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div v-for="(item,index) in comments" :key="index" class="dev-issue-main dev-issue-comment tail">
                            <div class="dev-issue-main-avatar">
                                <div class="dev-user-pop">
                                    <Poptip trigger="hover" :title="item.user.username" content="content">
                                        <a href="#" target="_blank">
                                            <Avatar shape="square" size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                                        </a>
                                    </Poptip>
                                </div>
                            </div>
                            <div class="dev-issue-main-content">
                                <Card shadow>
                                    <div class="dev-issue-main-content-info">
									<span class="dev-userinfo">
										{{item.user.username}}
									</span>
                                        <span class="dev-time">
										<Time :time="item.createAt"></Time>
									</span>
                                    </div>
                                    <div class="">
                                        <div v-html="item.content"></div>
                                    </div>
                                    <div class="dev-issue-comment-reply">
                                        <Tooltip content="回复" placement="top">
                                            <Button type="text" icon="ivu-icon ivu-icon-ios-undo"></Button>
                                        </Tooltip>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div class="dev-issue-main dev-issue-comment">
                            <div class="dev-issue-main-avatar">
                                <div class="dev-user-pop">
                                    <Poptip trigger="hover" :title="article.author.username" content="content">
                                        <a href="#" target="_blank">
                                            <Avatar shape="square" size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                                        </a>
                                    </Poptip>
                                </div>
                            </div>

                            <div class="dev-issue-main-content">
                                <mavon-editor
                                        ref="editor"
                                        v-model="value"
                                        :toolbars="markdownOption"
                                        :subfield="false"
                                        :autofocus="false"
                                        placeholder="在这里编辑markdown,右上角开启双栏可实时预览."
                                ></mavon-editor>

                                <div class="dev-issue-comment-footer">
                                    <Button :disabled="isLogin"
                                            type="primary" @click="sub">回复</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
    </div>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import $ from '../../libs/util'
    export default {
        name:'detail',
        mounted(){
            let { id } = this.$route.params;
            let user = $.getStorage('user',2*60*60*1000).data;
            if( user ) this.isLogin = false;
            this.$axios.get(`/article/${id}`).then( res => {
                 this.article = res.data.data;
            })
        },
        data(){
            return {
                markdownOption:{
                    code: true,
                    table: true,
                    help:true,
                    subfield: true, // 单双栏模式
                    fullscreen: true, // 全屏编辑
                    ol: true, // 有序列表
                    ul: true, // 无序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    alignleft: true, // 左对齐
                    aligncenter: true, // 居中
                    alignright: true,
                    underline: true, // 下划线
                    strikethrough: true, // 中划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                },
                article:'',
                value:'',
                comment:'',
                isLogin:true
            }
        },
        computed:{
            comments(){
                return this.article.comment;
            }
        },
        methods: {
            sub(){
                let editor = this.$refs.editor;
                let user = $.getStorage('user',2*60*60*1000).data;
                this.$axios.post('/article/addcomment',{
                    comment: editor.d_render,
                    user,
                    id: this.article._id
                }).then( res => {
                    let message = res.data.message;
                    let success = res.data.success;
                    this.article = res.data.data;
                    console.log( res.data.data )
                    if (success) {
                        this.$Message.success(message);
                    } else {
                        this.$Message.error(message);
                    }
                    this.value = '';
                } );

            }
        },
        components:{
            mavonEditor
        }
    }
</script>

<style lang="less" scoped>
    .dev-issue {
        width: 75%;
        margin: 10px auto;
        .dev-issue-main{

            .dev-issue-main-avatar{
                float: left;
            }
            .dev-issue-main-content{
                position: relative;
                margin-left: 60px;
                h2.dev-issue-main-content-info-title{
                    display: inline;
                    vertical-align: middle;
                    color: #17233d;
                }

                .dev-issue-main-content-info{
                    margin-bottom: 12px;
                }
            }

        }

        .dev-issue-comment{
            margin-top: 20px;
            position: relative;
            .dev-issue-comment-reply{
                position: absolute;
                top: 0;
                right: 0;
                button{
                    opacity: 0;
                    transition: opacity .2s ease-in-out;
                }
            }
            .dev-issue-comment-footer{
                margin-top: 10px;
                text-align: right;
            }
        }
        .dev-issue-comment:hover{
            .dev-issue-comment-reply{
                button{
                    opacity: 1;
                }
            }
        }
        .dev-issue-comment.tail::before{
            content: "";
            display: block;
            width: 2px;
            height: 20px;
            background: #bbb;
            position: absolute;
            left: 80px;
            top: -20px;
        }
    }
    .dev-md{
        font-size: 14px;
        color: #515a6e;
    }
    .dev-time{
        font-size: 12px;
        vertical-align: middle;
        color: #808695;
    }
    .dev-userinfo{
        font-weight: 500;
        color: #808695;
    }
</style>