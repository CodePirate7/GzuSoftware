<template>
  <div class="home">
    <dev-header></dev-header>
    <div class="container">
        <Carousel loop>
        <CarouselItem>
          <div class="demo-carousel img1">
            这 里 放 描 述 性 文 字
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel img2">
            这 里 放 描 述 性 文 字
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel img3">
            这 里 放 描 述 性 文 字
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel img4">
            这 里 放 描 述 性 文 字
          </div>
        </CarouselItem>
      </Carousel>
    </div>
    <div class="container">
      <Divider orientation="left" style="font-size:20px;font-weight:bolder;padding-top:20px;">学 院 新 闻</Divider>
      <!-- <Row :gutter="24" >
        <Col span="6" >
          <Card shadow class="card1">这里是新闻内容</Card>
        </Col>
        <Col span="6">
          <Card shadow class="card2">这里是新闻内容</Card>
        </Col>
        <Col span="6">
          <Card shadow class="card3">这里是新闻内容</Card>
        </Col>
        <Col span="6">
          <Card shadow class="card4">这里是新闻内容</Card>
        </Col>
      </Row> -->
      <css-card></css-card>
    </div>
    <div class="footer container">
      这里放footer
    </div>
  </div>
</template>

<script>
import DevHeader from '@/components/DevHeader.vue'
import CssCard from '@/components/CssCard.vue'
export default {
  name: 'home',
  data () {
        return {
            value2: 0
        }
  },
  components: {
      DevHeader,CssCard
  }
}
</script>
<style scoped lang="less">
  .demo-carousel{
    height: 300px;
    text-align: center;
    line-height: 300px;
    color: #fff;
    font-weight: bolder;
  }
  .container{
    width: 90%;
    margin:10px auto;
    background-color: #fff;
    box-shadow: 1px 1px 5px #aaa;
  }
  .img1{
    background: linear-gradient(33deg, #6DE195, #C4E759)
  }
  .img2{
    background: linear-gradient(33deg, #41C7AF, #54E38E)
  }
  .img3{
    background: linear-gradient(33deg, #99E5A2, #C1E3FF)
  }
  .img4{
    background: linear-gradient(33deg, #6CACFF, #8DEBFF)
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
</style>
