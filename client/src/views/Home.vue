<template>
  <div class="home">
    <dev-header></dev-header>
    <Swiper></Swiper>
    <div style="width: 90%;margin:10px auto;">
          <Row :gutter="16" >
              <Col span="16">
                  <Card shadow style="border-radius: 10px;" class="dshadow">
                      <p slot="title" style="font-size:20px;font-weight:bolder;">
                          <Icon type="ios-film-outline"></Icon>
                          学 院 新 闻
                      </p>
                      <router-link to="/information" slot="extra">
                          <Icon type="ios-loop-strong"></Icon>
                          更多 >
                      </router-link>
                      <!--<Divider orientation="left" style="font-size:20px;font-weight:bolder;padding-top:20px;">学 院 新 闻</Divider>-->
                      <div>
                          <Row :gutter="24" style="margin-bottom: 20px;">
                              <Col span="4">
                                <div style="background: linear-gradient(33deg, #99E5A2, #C1E3FF);height: 80px;"></div>
                              </Col>
                              <Col span="20" class="article-container">
                                  <h3>2017企业项目课程答辩新闻稿</h3>
                                  <p>贵州大学软件学院15级互联网营销专业实战项目答辩会</p>
                              </Col>
                          </Row>
                          <Row :gutter="24">
                              <Col span="4">
                                  <div style="background: linear-gradient(33deg, #99E5A2, #C1E3FF);height: 80px;"></div>
                              </Col>
                              <Col span="20" class="article-container">
                                  <h3>贵州大学17级新生活动新闻稿</h3>
                                  <p>丹桂飘香，荷花满塘，又是一年迎新时贵州大学示范性软件学院迎来了第四届慧小科们。9月12日上午7时，学校迎新工作正式启动。一张张热情的笑脸，一句句亲切的问候，一项项贴心的服务，欢迎着来自全省各地的莘莘学子。校迎新工作正式启动。校迎新工作正式启动。校迎新工作正式启动。校迎新工作正式启动。校迎新工作正式启动。校迎新工作正式启动。校迎新工作正式启动。</p>
                              </Col>
                          </Row>
                      </div>
                  </Card>
              </Col>
              <Col span="8">
                  <Card shadow style="border-radius: 10px;" class="dshadow">
                      <p slot="title" style="font-size:20px;font-weight:bolder;">
                          <Icon type="ios-film-outline"></Icon>
                          通 知 公 告
                      </p>
                      <a href="#" slot="extra">
                          <Icon type="ios-loop-strong"></Icon>
                          更多 >
                      </a>
                      <div>
                          <p>通知公告通知公告通知公告通知公告通知公告通知公告通知公告</p>
                          <Divider />
                      </div>
                      <div>
                          <p>通知公告通知公告通知公告通知公告通知公告通知公告通知公告</p>
                          <Divider />
                      </div>

                  </Card>
              </Col>
          </Row>
      </div>
    <div class="container" style="border-radius: 10px;">
      <Divider orientation="left" style="font-size:20px;font-weight:bolder;padding-top:20px;">作 品 展 示</Divider>
      <css-card ></css-card>
    </div>
    <div class="footer container">
      这里放footer
    </div>
  </div>
</template>

<script>
import CssCard from '@/components/CssCard.vue'
import Swiper from '@/components/Swiper.vue'
export default {
  name: 'home',
  data () {
        return {
            value2: 0
        }
  },
  components: {
      CssCard,Swiper
  }
}
</script>
<style scoped lang="less">

  .container{
    width: 90%;
    margin:10px auto;
    background-color: #fff;
    box-shadow: 1px 1px 5px #aaa;
  }


  .card1{
    height: 300px;
    background: linear-gradient(33deg, #6CACFF, #8DEBFF)
  }
  .card2{
    height: 300px;
     background: linear-gradient(33deg, #99E5A2, #C1E3FF)
  }
  .card3{
    height: 300px;
    background: linear-gradient(33deg, #6DE195, #C4E759)
  }
  .card4{
    height: 300px;
    background: linear-gradient(33deg, #99E5A2, #C1E3FF)
  }
  .footer{
    margin-top: 300px;
  }
  .dev-news-item{

      .dev-news-left{
          float: left;
      }
  }
  .article-container {
      display: -webkit-box;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3; //需要显示的行数
      overflow: hidden;
      text-overflow: ellipsis;
  }

</style>
