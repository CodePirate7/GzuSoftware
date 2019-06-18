<template>
        <div class="swiper" ref="home" @mousemove="fn1" @mouseleave="fn2">
            <div id="banner" ref="banner">
                <Carousel loop  class="container" >
                    <CarouselItem>
                        <div class="demo-carousel img2" >
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
    .demo-carousel{
        height: 300px;
        text-align: center;
        line-height: 300px;
        color: #fff;
        font-weight: bolder;
    }
    .swiper{
        margin:10px auto;
        perspective: 500px;
        width: 100%;
        background: transparent;
    }
    .container{
        width: 90%;
        margin:0 auto;
    }
    #banner{
        height: 300px;
        margin: 0 auto;
        /*background:  #37D7B2;*/
        transition: transform 0.1s;
        /*box-shadow: 0 0 15px rgba(0,0,0,0.25);*/
        text-align: center;
        color: #fff;
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
