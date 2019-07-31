<template>
    <layout>
        <Table :columns="columns" :data="list" :loading="loading" border size="small">
            <template slot-scope="{ row }" slot="time">
                <Time :time="row.createAt" type="date"></Time>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template>
        </Table>

        <div style="text-align: center;margin: 16px 0">
            <Page :total="total"
                  size="small"
                  show-total
                  @on-change="handleChangeSize"
                  :current.sync="current"
            />
        </div>
    </layout>
</template>

<script>
    import Layout from './Layout'
    export default {
        name: "news",
        data () {
            return {
                columns: [
                    {
                        title:'序号',
                        type:'index',
                        align:'center',
                        indexMethod: (row) => {
                            return (row._index + 1) + (10 * this.current) - 10;
                        },
                        width:70
                    },
                    {
                        title: '新闻标题',
                        key: 'title',
                        align: 'center',
                    },
                    {
                        title: '发布时间',
                        slot:'time',
                        align:'center',

                    },
                    {
                        title: '浏览量',
                        key: 'views',
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
                size: 10,
                list:[]
            };
        },
        methods: {
            getData () {
                if ( this.loading ) return;
                this.loading = true;
                this.$axios.get('/news').then( res => {
                    this.loading = false;
                    let data = res.data;
                    this.data = data;
                    this.list = data.slice(0,10);
                    this.total = data.length;
                })
            },
            handleChangeSize (size) {
                let asize = size - 1;
                this.list = this.data.slice( asize * 10, asize * 10 + 10 );
            },
            remove (index) {
                let {_id:id} = this.data[index];
                index = index + (10 * this.current) - 10;
                this.$Modal.confirm({
                    title:'警告',
                    content:'该操作不可逆，是否继续?',
                    onOk: () => {
                        this.$axios.delete(`/news/${id}`)
                            .then( res => {
                                this.$Message.success(res.data.message);
                                this.data.splice(index,1);
                                this.list.splice(index % 10,1);
                                this.total = this.data.length;
                            });
                    }
                })
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