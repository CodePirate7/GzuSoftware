<template>
    <div class="content">
        <Card class="userform" title="后台管理系统">
            <Form ref="formInline" :model="formInline" :rules="ruleInline" block >
                <FormItem prop="user">
                    <Input type="text" v-model="formInline.username" placeholder="用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="密码">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formInline')" shape="circle" long>登 录</Button>
                </FormItem>
            </Form>
        </Card>

    </div>
</template>

<script>
    import $ from '../../libs/util'
    export default {
        data() {
            return {
                formInline: {
                    username: "",
                    password: ""
                },
                ruleInline: {
                    username: [
                        {
                            required: true,
                            message: "请输入用户名",
                            trigger: "blur"
                        }
                    ],
                    password: [
                        {
                            required: true,
                            message: "请输入密码",
                            trigger: "blur"
                        },
                        {
                            type: "string",
                            min: 6,
                            message: "密码长度不能低于6位",
                            trigger: "blur"
                        }
                    ]
                }
            };
        },
        methods: {
            handleSubmit(name) {
                this.$axios
                    .post("/login", {
                        data: this.formInline
                    })
                    .then(res => {
                        let message = res.data.message;
                        let success = res.data.success;
                        let isAdmin = res.data.isAdmin;
                        if( success ){
                            if( isAdmin ){
                                this.$Message.success( message );
                                let user = res.data.data;
                                $.setStorage( "admin", user );
                                this.$router.push('home');
                            }else {
                                this.$Message.error('用户权限不足');
                            }
                        }else{
                            this.$Message.error(message);
                        }
                    });
            }
        }
    }
</script>

<style scoped lang="less">
    .content{
        width: 300px;
        margin: 0 auto;
        .userform{
            display: inline-block;
            width: 300px;
            height: 270px;
            background: #fff;
            margin: 100px auto 0;
        }
    }

</style>