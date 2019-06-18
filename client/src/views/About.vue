<template>
  <div class="home" ref="home" @mouseleave="fn2" @mousemove="fn1">
    <div id="banner"  ref="banner" >
      banner
    </div>
  </div>
</template>

<script>

    export default {
        name: 'home',
        data(){
            return {
                x:'',
                y:''
            }
        },
        methods:{
            fn1( e ){
                let home = this.$refs.home;
                let banner = this.$refs.banner;
                let x = e.pageX - home.offsetLeft;
                let y = e.pageY - home.offsetTop;
                let centerX = this.$refs.home.offsetWidth / 2;
                let centerY = this.$refs.home.offsetHeight / 2;
                let deltaX = x - centerX;
                let deltaY = y - centerY;
                let percentX = deltaX / centerX;
                let percentY = deltaY / centerY;
                let deg = 3;
                banner.style.transform = 'rotateX(' + deg * (-percentY) + 'deg)'+
                    ' rotateY(' + deg * percentX + 'deg)'
            },
            fn2(){
                let banner = this.$refs.banner;
                banner.style.transform = ''
            }
        }
    }
</script>

<style lang="less">
  .home{
    width: 100%;
    height: 500px;
    background: white;
    padding: 100px 0;
    margin: 100px auto;
    border: 1px solid #ddd;
    perspective: 500px;

    #banner{
      height: 300px;
      width: 80%;
      margin: 0 auto;
      background:  #37D7B2;
      transition: transform 0.1s;
      box-shadow: 0 0 15px rgba(0,0,0,0.25);
      text-align: center;
      line-height: 300px;
      font-size: 50px;
      color: #fff;
    }
  }
</style>
