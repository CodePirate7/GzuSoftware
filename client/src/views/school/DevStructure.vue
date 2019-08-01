<template>

    <div id="app">
        <div class="hh">
            <school-layout>
                <h2 align="center">贵州大学省级示范性软件学院组织架构图</h2>

                <div class="control-box">
                    <Button type="info" @click="expandAll = !expandAll">{{ expandAll ? '收起' : '展开' }}</Button>
                    <!--<button @click="expandAll = !expandAll">{{ expandAll ? '收起' : '展开' }}</button>-->
                    <!--<button @click="changeData">hh</button>-->
                </div>

                <div class="tree-wrapper">
                    <org-tree :data="data"
                              collapsable
                              :node-render="nodeRender"
                              :expand-all="expandAll"
                              :horizontal="false"
                              :props="props"
                              @on-expand="onExpand"
                              @on-node-click="onNodeClick"></org-tree>
                </div>
                <div class="test">
                </div>

                <BackTop :height="100" :bottom="35">
                    <div class="top">
                        <Icon type="ios-arrow-up" />
                    </div>
                </BackTop>
            </school-layout>
        </div>

    </div>
</template>

<script>
    import SchoolLayout from './SchoolLayout'
import OrgTree from './org-tree'
import { data/*, newData*/ } from './data'
export default {
  name: 'DevStructure',
  data () {
    return {
      data,
        //expandAll: false,
      expandAll: true,
      props: {
        id: 'dep_id',
        label: 'title',
        expand: 'expand',
        children: 'dep_children'
      }
    }
  },
  components: { OrgTree,SchoolLayout },
  methods: {
    nodeRender (h, data) {
      // console.log(data)
      return (
        <span>{data.label}</span>
      )
    },
    onNodeClick (e, data) {
      console.log(data)
    },
    onExpand (val, status) {
      console.log(val, status)
    },
    buttonRender (h, data) {
      return (
        <div style={{ width: '20px', height: '20px', background: data.expand ? 'red' : 'yellow' }}></div>
      )
    },
    changeData () {
      this.data = newData
    }
  }
}
</script>

<style lang="less">

    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
    }

    #app {
        height: 100%;
        width: 100%;
    }

    .control-box {
        padding: 15px;
        button

    {
        padding: 6px 10px;
        font-size: 14px;
        //background: rgb(247, 245, 245);
        border: 1px solid rgb(149, 215, 253);
        border-radius: 4px;
        height: 14px;
        line-height: 14px;
        box-sizing: content-box;
    }

    }

    .tree-wrapper {

        margin-top:15px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .top{

        
        background: rgba(199, 199, 199, .7);
        color: #fff;
        text-align: center;
        border-radius: 50%;
        width: 50px;      
        height: 50px;          
        border-radius: 50%;
        padding-top:5px;
        //-moz-border-radius: 50%;      
        //-webkit-border-radius: 50%; 


    }
    .test{
        height:300px;
    }
    .app{
        font-family: Lato, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,"Microsoft JhengHei", "MicrMicrosoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif;
    }
</style>
