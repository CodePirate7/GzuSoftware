<template>
    <layout>
        <Table :columns="columns" :data="list" :loading="loading" border size="small">
            <template slot-scope="{ row }" slot="time">
                <Time :time="row.createAt" type="date"></Time>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="change(index)">更改权限</Button>
                <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template>
            <template slot-scope="{ row }" slot="isAdmin">
                <span v-if="row.isAdmin"> 是 </span>
                <span v-else> 否 </span>
            </template>
        </Table>
        <Modal v-model="modal12" scrollable title="更改权限" @on-ok="handleChangeOk">
            <div>
                管理员:
                <RadioGroup v-model="newAdmin">
                    <Radio label="true">是</Radio>
                    <Radio label="false">否</Radio>
                </RadioGroup>
            </div>
        </Modal>
        <Modal v-model="modal2" scrollable title="警告" @on-ok="handleChangeOk">
            <div>
                管理员:
                <RadioGroup v-model="newAdmin">
                    <Radio label="true">是</Radio>
                    <Radio label="false">否</Radio>
                </RadioGroup>
            </div>
        </Modal>
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
                        slot:'isAdmin',
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
                list:[],
                modal12:false,
                newAdmin: 'false',
                id:'',
                modal2:false
            };
        },
        methods: {
            getData () {
                if ( this.loading ) return;
                this.loading = true;
                this.$axios.get('/user').then( res => {
                    this.loading = false;
                    let data = res.data;
                    this.data = data;
                    this.list = data.slice(0,10);
                    this.total = data.length;
                    this.isShow = true;
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
                        this.$axios.delete(`/user/${id}`)
                            .then( res => {
                                this.$Message.success(res.data.message);
                                this.data.splice(index,1);
                                this.list.splice(index % 10,1);
                                this.total = this.data.length;
                            });
                    }
                })
            },
            change (index) {
                let {_id: id } = this.data[index];
                index = index + ( 10 * this.current ) -10;
                this.modal12 = true;
                if( this.data[index].isAdmin ) this.newAdmin = 'true';
                else this.newAdmin = 'false';
                this.id = id;
            },
            handleChangeOk() {
                this.$axios.post('/user/changeLevel',{
                        id: this.id,
                        isAdmin: this.newAdmin
                }).then( res => {
                    this.$Message.success(res.data.message);
                    this.getData();
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