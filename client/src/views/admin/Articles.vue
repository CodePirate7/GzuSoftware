<template>
    <layout>
        <Table :columns="columns" :data="data" :loading="loading" border size="small">
            <template slot-scope="{ row }" slot="time">
                <Time :time="row.createAt" type="date"></Time>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template>
            <template slot-scope="{ row }" slot="comment">
                <span> {{row.comment.length}} </span>
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
                        title: '文章标题',
                        key: 'title',
                        align: 'center',
                    },
                    {
                        title: '发表时间',
                        slot:'time',
                        align:'center',
                    },
                    {
                        title: '类型',
                        key: 'type',
                        align: 'center',
                    },
                    {
                        title: '浏览量',
                        key: 'views',
                        align: 'center',
                    },
                    {
                      title:'评论数',
                      align:'center',
                      slot:'comment'
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
                this.$axios.get('/article').then( res => {
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