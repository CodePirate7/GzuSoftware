<template>
    <layout>
        <Divider orientation="left">正在轮播</Divider>
        <div class="list dis">
            <div class="imgList"
                 v-for="(item,index) in imgList"
                 :style="{'background': 'url(http://localhost:3000/' + item.url + ') no-repeat center/cover'}" ></div>
            </div>
        <Divider orientation="left">增加轮播图</Divider>

        <div class="list">
            <Form  label-position="left" :label-width="60">
                <FormItem label="上传图片">
                    <Upload action="http://localhost:3000/banner/add"
                            :before-upload="handleUpload"
                            :on-success="handleSuccess"
                    >
                        <Button icon="ios-cloud-upload-outline">选择图片</Button>
                    </Upload>
                    <div v-if="isShow">
                        <span>文件名: </span>{{file.name}}
                        <span>大小: </span>{{(file.size / 1024 / 1024).toFixed(2)}} MB
                        <span> {{loaded}}</span>
                        <Progress :percent="loaded" :stroke-width="5">
                        </Progress>
                    </div>
                    <div class="img" :style="{'background': 'url(' + img + ') no-repeat center/cover'}" v-if="img"></div>
                </FormItem>
<!--                <FormItem label="描述">-->
<!--                    <Input v-model="description" type="textarea" :rows="4"></Input>-->
<!--                </FormItem>-->
<!--                <FormItem>-->
<!--                    <Button type="primary" @click="handleSubmit">提交</Button>-->
<!--                    <Button style="margin-left: 8px">重置</Button>-->
<!--                </FormItem>-->
            </Form>
        </div>
    </layout>
</template>

<script>
    import Layout from './Layout';
    export default {
        data(){
            return{
                file:'',
                title:'',
                description:'',
                isShow: false,
                loaded:0,
                result:'',
                img:'',
                imgList:[]
            }
        },
        mounted(){
            this.getImage();
        },
        methods:{
            handleUpload( file ){
                // this.loaded = 0;
                // this.file = file;
                // let reader = new FileReader();
                // let size = file.size;
                // reader.readAsBinaryString(file);
                // reader.onprogress = evt => {
                //     this.loaded = evt.loaded / size * 100
                // };
                // reader.onload = f => {
                //     this.result = f.target.result;
                // };
                // this.isShow  = true;
                // return false;
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    this.img = reader.result;
                };
            },
            handleSuccess(){
                this.$Message.success('上传成功')
            },
            getImage(){
                this.$axios.get('banner')
                    .then( res => {
                        this.imgList = res.data;
                    })
            }
        },
        components:{
            Layout
        }
    }
</script>

<style scoped lang="less">
    .list{
        margin: 16px 16px;
    }
    .img{
        width: 100%;
        height: 300px;
    }
    .imgList{
        width: 23%;
        height: 100px;
    }
    .dis{
        display: flex;
        justify-content: space-between;
    }
</style>