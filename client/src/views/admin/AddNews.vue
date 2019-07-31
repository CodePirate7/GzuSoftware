<template>
    <layout>
        <Form  label-position="left" :label-width="60">
            <FormItem label="标题">
                <Input v-model="title"></Input>
            </FormItem>
            <FormItem label="摘要">
                <Input v-model="summary" type="textarea" :rows="8"></Input>
            </FormItem>
            <FormItem label="上传文件">
                <Upload action="http://localhost:3000/news/add" :before-upload="handleUpload">
                    <Button icon="ios-cloud-upload-outline">选择文件</Button>
                </Upload>
                <div v-if="isShow">
                    <span>文件名: </span>{{file.name}}
                    <span>大小: </span>{{(file.size / 1024 / 1024).toFixed(2)}} MB
                    <span> {{loaded}}</span>
                    <Progress :percent="loaded" :stroke-width="5">
                    </Progress>
                </div>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit">提交</Button>
                <Button style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>



    </layout>
</template>

<script>
    import Layout from './Layout'
    export default {
        name: "AddNews",
        components:{
            Layout
        },
        data(){
            return {
                file:'',
                title:'',
                summary:'',
                isShow: false,
                loaded:0,
                result:''
            }
        },
        methods: {
            handleUpload( file ){
                this.file = file;
                let reader = new FileReader();
                let size = file.size;
                reader.readAsBinaryString(file);
                reader.onprogress = evt => {
                    this.loaded = evt.loaded / size * 100
                };
                reader.onload = f => {
                    this.result = f.target.result;
                };
                this.isShow  = true;
                return false;
            },
            handleSubmit(){
                this.loaded = 0;
                this.$axios.post('/news/add',{
                    title: this.title,
                    summary: this.summary,
                    file: this.result
                }).then((res)=>{
                    this.loaded = 100;
                    this.$Message.success(res.data.message);
                    this.isShow = false;
                    this.title = '';
                    this.summary = '';
                    this.result = '';
                    this.file = ''
                })

            }
        }
    }
</script>

<style scoped>

</style>