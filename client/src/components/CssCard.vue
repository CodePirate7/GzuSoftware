<template>
  <div class="content">
    <a class="card" href="#!">
      <div class="front" style="background: linear-gradient(33deg, #6CACFF, #8DEBFF)">
          <p>跑跑吧</p>
      </div>
      <div class="back">
        <div>
            <p>
                产品以智能互助系统为核心,结合校园资讯发布和轻社交功能,致力于用大数据智能推荐技术使学生高效便捷地享受校园生活
            </p>
          <button class="button" @click="jump">了解详情</button>
        </div>
      </div>
    </a>
    <a class="card" href="#!">
      <div class="front" style="background: linear-gradient(33deg, #99E5A2, #C1E3FF)">
          <p>建堪集团</p>
      </div>
      <div class="back">
        <div>
            <p>
                制做出一个适合外国人的购买方式的网站以及后期的APP。
                在推广产品的同时宣传企业品牌，让世界人增加对中国的
                了解
            </p>
          <button class="button">了解详情</button>
        </div>
      </div>
    </a>
    <a class="card" href="#!">
      <div class="front" style="background: linear-gradient(33deg, #6DE195, #C4E759)">
          <p>新浪贵州</p>
      </div>
      <div class="back">
        <div>
            <p>藐视寒冬，启动全民冬跑热情，让冬跑的足迹遍布城市角落，跑热中国，冬季不冬眠</p>
          <button class="button">了解详情</button>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "DevHeader",
  methods:{
      jump(){
          this.$router.push('/project');
      }
  }
};
</script>

<style scoped lang="less">
.content {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 300;
  color: #333;
  font-family: "Nunito Sans", sans-serif;
}

.heading {
  width: 100%;
  margin-left: 1rem;
  font-weight: 900;
  font-size: 1.618rem;
  text-transform: uppercase;
  letter-spacing: .1ch;
  line-height: 1;
  padding-bottom: .5em;
  margin-bottom: 1rem;
  position: relative;
}
.heading:after {
  display: block;
  content: '';
  position: absolute;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
  bottom: 0;
}

.description {
  width: 100%;
  margin-top: 0;
  margin-left: 1rem;
  margin-bottom: 3rem;
}

.card {
  color: inherit;
  cursor: pointer;
  width: calc(33% - 2rem);
  min-width: calc(33% - 2rem);
  height: 300px;
  min-height: 300px;
  perspective: 1000px;
  margin: 1rem;
  position: relative;
}
@media screen and (max-width: 800px) {
  .card {
    width: calc(50% - 2rem);
  }
}
@media screen and (max-width: 500px) {
  .card {
    width: 100%;
  }
}

.front,
.back {
  display: flex;
  border-radius: 6px;
  background-position: center;
  background-size: cover;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
}

.front {
  background-size: cover;
  padding: 2rem;
  font-size: 1.618rem;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  font-family: Poppins, sans-serif;
}
.front:before {
  position: absolute;
  display: block;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
  opacity: .25;
  z-index: -1;
}
.card:hover .front {
  transform: rotateY(180deg);
}
.card:nth-child(even):hover .front {
  transform: rotateY(-180deg);
}

.back {
  background: #fff;
  transform: rotateY(-180deg);
  padding: 0 2em;
}
.card:hover .back {
  transform: rotateY(0deg);
}
.card:nth-child(even) .back {
  transform: rotateY(180deg);
}
.card:nth-child(even):hover .back {
  transform: rotateY(0deg);
}

.button {
  transform: translateZ(40px);
  cursor: pointer;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-weight: bold;
  color: #fff;
  padding: .5em 1em;
  border-radius: 100px;
  font: inherit;
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
  border: none;
  position: relative;
  transform-style: preserve-3d;
  transition: 300ms ease;
}
.button:before {
  transition: 300ms ease;
  position: absolute;
  display: block;
  content: '';
  transform: translateZ(-40px);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  border-radius: 100px;
  left: 10px;
  top: 16px;
  box-shadow: 0 0 10px 10px rgba(26, 87, 230, 0.25);
  background-color: rgba(26, 87, 230, 0.25);
}
.button:hover {
  transform: translateZ(55px);
}
.button:hover:before {
  transform: translateZ(-55px);
}
.button:active {
  transform: translateZ(20px);
}
.button:active:before {
  transform: translateZ(-20px);
  top: 12px;
}
p{
        font-family: Lato, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,"Microsoft JhengHei", "MicrMicrosoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif;

  }
</style>