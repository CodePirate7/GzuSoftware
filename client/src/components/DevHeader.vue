<template>
  <div class="dev-header">
    <Row>
      <Col span="20" offset="2">
        <Menu mode="horizontal" active-name="1">
          <MenuItem name="1">
            <Icon type="ios-paper"/>首页
          </MenuItem>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-stats"/>学院概况
            </template>
            <MenuItem name="2-1">学院简介</MenuItem>
            <MenuItem name="2-2">组织结构</MenuItem>
            <MenuItem name="2-3">校企合作</MenuItem>
            <MenuItem name="2-4">行政机构</MenuItem>
            <MenuItem name="2-4">联系我们</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats"/>学院人员
            </template>
            <MenuItem name="3-1">教学研究人员</MenuItem>
            <MenuItem name="3-2">行政人员</MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-stats"/>学生培养
            </template>
            <MenuItem name="4-1">本科生培养</MenuItem>
            <MenuItem name="4-2">课程设置</MenuItem>
          </Submenu>
          <Submenu name="5">
            <template slot="title">
              <Icon type="ios-stats"/>学术研究
            </template>
            <MenuItem name="5-1">科研成果</MenuItem>
            <MenuItem name="5-2">研究中心</MenuItem>
            <MenuItem name="5-3">学术活动</MenuItem>
          </Submenu>
          <Submenu name="6">
            <template slot="title">
              <Icon type="ios-stats"/>招生就业
            </template>
            <MenuItem name="6-1">就业信息</MenuItem>
            <MenuItem name="6-2">招生信息</MenuItem>
          </Submenu>
          <MenuItem name="7">学术论坛</MenuItem>
        </Menu>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "DevHeader"
};
</script>

<style scoped lang="less">
.ivu-menu-light {
  /*background: transparent;*/
}
.dev-header {
  background: #fff;
  box-shadow: 1px 1px 5px #aaa;
}
</style>