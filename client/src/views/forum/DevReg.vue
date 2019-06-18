<template>
    <div id="Reg">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" block class="userform">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.name" placeholder="请输入用户名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="mail">
                <Input v-model="formInline.mail" placeholder="请输入邮箱">
                    <Icon type="ios-mail-outline" slot="prepend"/>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="请输入密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="passcheck">
                <Input type="password" v-model="formInline.passcheck" placeholder="请再次输入密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem class="sub">
                <Button type="primary" @click="handleSubmit('formInline')" shape="circle">注 册</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    import { setTimeout } from "timers";
    export default {
        data() {
            const validatePassCheck = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请再次输入密码"));
                } else if (value !== this.formInline.password) {
                    callback(new Error("两次输入的密码不匹配"));
                } else {
                    callback();
                }
            };
            return {
                formInline: {
                    name: "",
                    password: "",
                    passcheck: "",
                    mail: ""
                },
                ruleInline: {
                    name: [
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
                    ],
                    passcheck: [{ validator: validatePassCheck, trigger: "blur" }],
                    mail: [
                        {
                            required: true,
                            message: "Mailbox cannot be empty",
                            trigger: "blur"
                        },
                        { type: "email", message: "Incorrect email format", trigger: "blur" }
                    ]
                }
            };
        },
        methods: {
            handleSubmit(name) {
                this.$axios
                    .post("http://localhost:3000/reg", {
                        data: this.formInline
                    })
                    .then(res => {
                        let message = res.data.message;
                        let success = res.data.success;
                        console.log(message);
                        if (success) {
                            this.$Message.success(message);
                            setTimeout(() => {
                                this.$router.push({ name: "login" });
                            }, 2000);
                        } else {
                            this.$Message.error(message);
                        }
                    });
            }
        }
    };
</script>
<style lang="less" scoped>
    #Reg {
        .sub {
            text-align: center;
        }
    }
</style>

