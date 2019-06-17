<template>
    <div class="dev-header">
        <Row>
            <Col span="4" style="text-align:center;line-height:60px;">
                LOGO
            </Col>
            <Col span="16" >
                <Menu mode="horizontal"  active-name="1">
                    <MenuItem name="1">
                        <Icon type="ios-paper" />
                        首页
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-people" />
                        学院概况
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-construct" />
                        师资队伍
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-construct" />
                        学生教育
                    </MenuItem>
                    <MenuItem name="5">
                        <Icon type="ios-construct" />
                        招生就业
                    </MenuItem>
                    <MenuItem name="6">
                        <Icon type="ios-construct" />
                        学术论坛
                    </MenuItem>
                </Menu>
            </Col>
        </Row>

    </div>
</template>

<script>
    export default {
        name: "DevHeader"
    }
</script>

<style scoped lang="less">
    .ivu-menu-light{
        /*background: transparent;*/
    }
    .dev-header{
        background: #fff;
        box-shadow:1px 1px 5px #aaa;
    }
</style>