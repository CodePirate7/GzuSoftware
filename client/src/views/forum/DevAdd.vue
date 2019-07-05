<template>
    <div>
        <div class="container">
            <Breadcrumb>
                <BreadcrumbItem to="/home">首页</BreadcrumbItem>
                <BreadcrumbItem to="/forum">论坛</BreadcrumbItem>
                <BreadcrumbItem>发帖</BreadcrumbItem>
            </Breadcrumb>
            <Card shadow class="dshadow content">
                <Form :model="formItem" :label-width="80">
                    <FormItem label="帖子类型">
                        <RadioGroup v-model="formItem.type">
                            <Radio label="提问">提问</Radio>
                            <Radio label="文章">文章</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="标题">
                        <Input v-model="formItem.title"
                               placeholder="请输入标题"
                               required
                        ></Input>
                    </FormItem>
<!--                    <FormItem label="文章配图" v-if="formItem.type == '文章'">-->
<!--                        <Upload action="">-->
<!--                            <Button icon="ios-cloud-upload-outline">上传图片</Button>-->
<!--                        </Upload>-->
<!--                    </FormItem>-->
<!--                    <FormItem label="摘要" v-if="formItem.type == '文章'">-->
<!--                        <mavonEditor ref="editor"-->
<!--                                     :toolbarsFlag="false"-->
<!--                                     :subfield="false"-->
<!--                                     placeholder="在这里写摘要,支持markdown语法"-->
<!--                                     style="min-height: 100px;"-->
<!--                        >-->
<!--                        </mavonEditor>-->
<!--                    </FormItem>-->
                    <FormItem label="内容">
                        <mavonEditor ref="editor"
                                     v-model="value"
                                     :toolbars="markdownOption"
                                     :subfield="false"
                                     placeholder="在这里编辑markdown,右上角开启双栏可实时预览.">
                        </mavonEditor>
                    </FormItem>
                    <FormItem class="right">
                        <Button type="primary" shape="circle" @click.native="handlesSubmit">提交</Button>
                    </FormItem>
                </Form>
            </Card>
        </div>
    </div>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import $ from '../../libs/util'
    export default {
        name: "DevAdd",
        methods:{
          handlesSubmit(){
              let editor = this.$refs.editor;
              let content = editor.d_render;
              let { title, type, summary} = this.formItem;
              let { _id } = $.getStorage('user', 2*60*60*1000).data;
              let value = this.value;
              this.$axios.post('/article/addarticle',{
                  title,content,type,value,
                  author: _id
              }).then( res => {
                  let { success } = res.data;
                  let { message } = res.data;
                  if ( success ) {
                      this.$Message.success( message );
                      setTimeout(()=>{
                          this.$router.push({path:'/forum/forumlist'});
                      },1000)
                  } else {
                      this.$Message.error( message );
                  }
              });
          }
        },
        data(){
            return {
                formItem: {
                    type: "提问",
                    title: '',
                    summary:'',
                },
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
                value:''

            }
        },
        components:{
            mavonEditor
        }
    }
</script>

<style scoped lang="less">
    .container{
        width: 70%;
        margin: 10px auto;
        .content{
            border-radius: 10px;
            margin-top:10px;
        }

        .right{
            text-align: right;
        }
    }
</style>