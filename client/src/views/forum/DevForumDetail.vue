<template>
    <div class="about">
        <div class="dev-issue">
            <Row :gutter="16">
                <Col span="24">
                        <div class="dev-issue-main">
                            <div class="dev-issue-main-avatar">
                                <div class="dev-user-pop">
                                    <Poptip trigger="hover" title="Title" content="content">
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
										玖伍陈海天
									</span>
                                        <span class="dev-time">
										07-28 16:01
									</span>
                                    </div>
                                    <div class="dev-md dev-article-content">
                                        <p>我是帖子内容</p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div v-for="(item,index) in comments" :key="index" class="dev-issue-main dev-issue-comment tail">
                            <div class="dev-issue-main-avatar">
                                <div class="dev-user-pop">
                                    <Poptip trigger="hover" title="Title" content="content">
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
										{{item.name}}
									</span>
                                        <span class="dev-time">
										<Time :time="item.time"></Time>
									</span>
                                    </div>
                                    <div class="">
                                        <div v-html="item.comment"></div>
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
                                    <Poptip trigger="hover" title="Title" content="content">
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
                                    <Button type="primary" @click="sub">回复</Button>
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
    export default {
        name:'detail',
        created(){

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
                id:3,
                value:'',
                time:'',
                comments:[
                    {
                        name: '用户一号',
                        comment: '第一个支持一下',
                        time: '07-28 16:01'
                    },
                    {
                        name: '用户二号',
                        comment: '第二个支持一下',
                        time: '07-28 16:01'
                    },
                    {
                        name: '用户三号',
                        comment: '第三个支持一下',
                        time: '07-28 16:01'
                    }
                ]
            }
        },
        computed:{
        },
        methods: {
            sub(){
                let editor = this.$refs.editor
                let id = this.id
                this.time = new Date().getTime()
                this.comments.push({
                    name: `用户${id+1}号`,
                    comment: editor.d_render,
                    time: this.time
                })
                this.value = ''
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