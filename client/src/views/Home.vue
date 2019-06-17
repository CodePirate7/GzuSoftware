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
  </div>
</template>

<script>
// @ is an alias to /src
import DevHeader from '@/components/DevHeader.vue'

export default {
  name: 'home',
  data () {
        return {
            value2: 0
        }
  },
  components: {
      DevHeader
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
</style>
