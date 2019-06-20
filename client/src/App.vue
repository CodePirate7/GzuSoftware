<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',

}
</script>

<style lang="less">

  .dshadow {
    position: relative;
    box-shadow: 0px 1px 4px rgba(0,0,0,0.3),
    0px 0px 20px rgba(0,0,0,0.1) inset;
    &::before,
    &::after {
      content:"";
      position:absolute;
      z-index:-1;
      bottom:15px;
      left:10px;
      width:50%;
      height:20%;
      box-shadow:0 15px 10px rgba(0, 0, 0, 0.7);
      transform:rotate(-3deg);
    }
    &::after{
      right:10px;
      left:auto;
      transform:rotate(3deg);
    }
  }



</style>
