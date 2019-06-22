<template>
    <div id="Login">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" block class="userform">
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
            <FormItem class="sub">
                <Button type="primary" @click="handleSubmit('formInline')" shape="circle">登 录</Button>
            </FormItem>
        </Form>
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
                    .post("http://localhost:3000/login", {
                        data: this.formInline
                    })
                    .then(res => {
                        let message = res.data.message;
                        let success = res.data.success;
                        if (success) {
                            this.$Message.success(message);
                            let user = res.data.data;
                            $.setStorage( "user", user );
                            location.reload();
                        } else {
                            this.$Message.error(message);
                        }
                    });
            }
        }
    };
</script>
<style lang="less" scoped>
    #Login {
        .sub {
            text-align: center;
        }
    }
</style>

