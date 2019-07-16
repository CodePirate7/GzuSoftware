<template>
    <layout>
        <Table :columns="columns" :data="data" :loading="loading" border size="small">
            <template slot-scope="{ row }" slot="time">
                <Time :time="row.createAt" type="date"></Time>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">更改权限</Button>
                <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template>
        </Table>

        <div style="text-align: center;margin: 16px 0">
            <Page
                    :total="total"
                    :current.sync="current"
                    show-sizer
                    @on-change="getData"
                    @on-page-size-change="handleChangeSize"></Page>
        </div>
    </layout>
</template>

<script>
    import Layout from './Layout'
    export default {
        data () {
            return {
                columns: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center',
                    },
                    {
                        title: '用户名',
                        key: 'username',
                        align: 'center',
                    },
                    {
                        title: '注册时间',
                        slot:'time',
                        align:'center',
                    },
                    {
                        title: '管理员',
                        key: 'isAdmin',
                        align: 'center',
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }

                ],
                data: [],
                loading: false,
                total: 0,
                current: 1,
                size: 10
            };
        },
        methods: {
            getData () {
                if ( this.loading ) return;
                this.loading = true;
                this.$axios.get('/user').then( res => {
                    this.data = res.data;
                    this.loading = false;
                })
            },
            handleChangeSize (val) {
                this.size = val;
                this.$nextTick(() => {
                    this.getData();
                });
            },
            remove (index) {
                this.data.splice(index, 1);
            }
        },
        mounted () {
            this.getData();
        },
        components:{
            Layout
        }
    }
</script>

<style scoped>

</style>