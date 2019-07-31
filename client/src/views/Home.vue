<template>
  <div class="home">
    <dev-header></dev-header>
    <Swiper></Swiper>
    <Card class="container">
        <p slot="title" style="font-size:20px;font-weight:bolder;color: #1469C1;">
            学 院 新 闻
        </p>
        <router-link slot="extra" style="color: #1469C1;" to="/information/news">
            更 多
        </router-link>
        <div style="display: flex;justify-content: space-around;">
            <router-link  class="news"  tag="div"
                          v-for="( item, index ) in news"
                          :to="`information/news/${item._id}`"
                          :key="index"
            >
                <div class="img">
                    <img :src="item.cover">
                </div>
                <div style="padding-top: 5px;">
                    <h3>{{item.title}}</h3>
                    <h4 class="article-container">{{item.summary}}</h4>
                </div>

            </router-link>
        </div>
    </Card>
    <Card class="container" shadow>
        <p slot="title" style="font-size:20px;font-weight:bolder;color: #1469C1;">
            作 品 展 示
        </p>
        <router-link slot="extra" style="color: #1469C1;" to="/information/news">
            更 多
        </router-link>
        <div>
            <css-card></css-card>
        </div>
    </Card>
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
  mounted(){
    this.$axios.get('/news')
        .then( res => {
            this.news = res.data.slice(0,4);
        })
  },
  data () {
        return {
            value2: 0,
            news:''
        }
  },
  components: {
      CssCard,Swiper
  }
}
</script>
<style scoped lang="less">
    .title{
        width: 90%;
        margin: 0 auto;
        color: #1469C1;
        font-size: 16px;
        font-weight: 500;
    }
  .news{
      h3{
          line-height: 30px;
          font-weight: 300;
          color: #1469C1;
          font-size: 13px;
      }
      h4{
          font-weight: 300;
      }
      width: 22%;
      background: #fff;
      cursor: pointer;
      /*box-shadow:  0 0 10px rgba(0,0,0,.15), 0 3px 3px rgba(0,0,0,.15);*/
      img{
          width: 100%;
      }
      .img{
          height: 180px;
      }
  }

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
