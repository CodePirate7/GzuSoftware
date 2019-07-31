<template>
  <div>
    <div class="logo">
      <div class="container">
        <img src="../assets/LOGO4.png" alt="logo">
      </div>
    </div>
      <Affix :offset-top="0">
        <div class="dev-header">
        <Row>
          <Col span="20" offset="2">
            <Menu mode="horizontal" :active-name="activename" class="menu-flex">
              <MenuItem name="/home" to="/home">
                <Icon type="md-home" />首页
              </MenuItem>
              <MenuItem name="/school">
                <Submenu name="/school" >
                  <template slot="title">
                    <Icon type="logo-buffer" />学院概况
                  </template>
                  <MenuItem name="/introduction" to="/school/introduction" >学院简介</MenuItem>
                  <MenuItem name="/structure" to="/school/structure">组织结构</MenuItem>
                  <MenuItem name="/partner" to="/school/partner">校企合作</MenuItem>
                  <MenuItem name="/contact" to="/school/contact">联系我们</MenuItem>
                </Submenu>
              </MenuItem>

                <MenuItem name="/workers">
                  <Submenu name="/workers">
                    <template slot="title">
                      <Icon type="ios-people" />学院人员
                    </template>
                    <MenuItem name="/teaching" to="/workers/teaching">教学研究人员</MenuItem>
                    <MenuItem name="/administrative" to="/workers/administrative">行政人员</MenuItem>
                  </Submenu>
                </MenuItem>


                <MenuItem name="/students">
                  <Submenu name="/students">
                    <template slot="title">
                      <Icon type="md-school" />学生培养
                    </template>
                    <MenuItem name="/training" to="/students/training">本科生培养</MenuItem>
                    <MenuItem name="/curriculum" to="/students/curriculum">专业培养</MenuItem>
                  </Submenu>
                </MenuItem>
                <MenuItem name="/research">
                    <Submenu name="/research">
                        <template slot="title">
                            <Icon type="md-flask" />学术研究
                        </template>
                        <MenuItem name="/stuachievement" to="/research/stu-achievement">学生项目成果</MenuItem>
                        <MenuItem name="/teaachievement" to="/research/tea-achievement">老师项目成果</MenuItem>
                        <MenuItem name="/research" to="/research/research">研究中心</MenuItem>
                        <MenuItem name="/academic" to="/research/academic">学术活动</MenuItem>
                    </Submenu>
                </MenuItem>
                <MenuItem name="/enandem">
                  <Submenu name="/enandem">
                    <template slot="title">
                      <Icon type="md-pulse" />招生就业
                    </template>
                    <MenuItem name="/enrollment" to="/enandem/enrollment">就业信息</MenuItem>
                    <MenuItem name="/employment" to="/enandem/employment">招生信息</MenuItem>
                  </Submenu>
                </MenuItem>
              <MenuItem name="/forum" to="/forum">
                <Icon type="md-chatbubbles" />学术论坛
              </MenuItem>
            </Menu>
          </Col>
        </Row>
        </div>
      </Affix>
  </div>

</template>

<script>
export default {
  name: "DevHeader",
  data(){
    return {
      activename: this.$route.path
    }
  },
  created() {
    let path = this.$route.path
    let index = path.lastIndexOf('/')
    if( index === 0 ) this.activename = path
    else this.activename = path.slice(0,index)

  }
};
</script>

<style scoped lang="less">
  .ivu-menu{
    position: static!important;
  }
.ivu-menu-light {
  /*background: transparent;*/
}
.ivu-menu-horizontal{
  height: 45px;
  line-height: 45px;
}
.logo{
  z-index: 51;
  width: 100%;
  background: url("../assets/BG.jpg");
  img{
    height: 100px;
  }
  .container{
    width: 95%;
    margin: 0 auto;
  }
}
.dev-header {
  background: #fff;
  box-shadow: 1px 1px 5px #aaa;
  width: 100%;
  height: 45px;
  left: 0;
  z-index: 50;
  border: 0;
}
.ivu-menu-submenu{
  padding: 0;
}
  .ivu-menu-item{

  }
.ivu-menu-horizontal.ivu-menu-light:after{
  display: none;
}
.ivu-menu-submenu{
  padding: 0;
}
.menu-flex{
  display: flex;
  justify-content: space-between;
}

</style>