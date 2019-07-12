<template>
    <layout>
        <Form  label-position="left" :label-width="60">
            <FormItem label="标题">
                <Input v-model="title"></Input>
            </FormItem>
            <FormItem label="摘要">
                <Input v-model="summary" type="textarea"></Input>
            </FormItem>
            <FormItem label="上传文件">
                <Upload action="http://localhost:3000/news/add" :before-upload="handleUpload">
                    <Button icon="ios-cloud-upload-outline">选择文件</Button>
                </Upload>
                <div v-if="isShow">
                    <span>文件名: </span>{{file.name}}
                    <span>大小: </span>{{file.size}}
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
                isShow: false
            }
        },
        methods: {
            handleUpload( file ){
                this.file = file;
                this.isShow  = true;
                return false;
            },
            handleSubmit(){
                let reader = new FileReader();
                reader.readAsBinaryString(this.file);
                reader.onload = f => {
                    let files = f.target.result;
                    this.$axios.post('/news/add',{
                        title: this.title,
                        summary: this.summary,
                        file: files
                    }).then((res)=>{
                        console.log(res);
                        this.$Message.success(res.data.message);
                        this.isShow = false;
                        this.title = '';
                        this.summary = '';
                        this.file = '';
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>