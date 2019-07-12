<template>
    <layout>
        <Table :columns="columns" :data="data" :loading="loading" border size="small"></Table>
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
        name: "news",
        data () {
            return {
                columns: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center',
                    },
                    {
                        title: '新闻标题',
                        key: 'title'
                    },
                    {
                        title: '发布时间',
                        key: 'createAt'
                    },
                    {
                        title: '浏览量',
                        key: 'views'
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
                this.$axios.get('/news').then( res => {
                    console.log( res.data );
                    this.data = res.data;
                    this.loading = false;
                })
                // $.ajax({
                //     method: 'get',
                //     url: `/data/list/${this.current}/${this.size}`
                // }).then(res => {
                //     setTimeout(() => {
                //         this.data = res.data.data.list;
                //         this.total = res.data.data.total;
                //         this.loading = false;
                //     }, 1000);
                // })

            },
            handleChangeSize (val) {
                this.size = val;
                this.$nextTick(() => {
                    this.getData();
                });
            },
            handleUpload(){

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