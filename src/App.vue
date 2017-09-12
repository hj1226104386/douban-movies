<template>
  <div id="app">
    <header>
      <span class='back iconfont icon-back'></span>
      <p class='title'>豆瓣电影</p>
    </header>
    <div class="mainBody">

    </div>
    <ul class="toolBar">
      <li>
        <a href="">
          <i class='playing iconfont icon-ing'></i>
          <span class=toolIcon>正在热映</span>
        </a>
      </li>
      <li>
        <a href="">
          <i class='rightNow iconfont icon-rightnow'></i>
          <span class=toolIcon>即将上映</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import first from './components/first.vue'
  import second from './components/second.vue'

  export default {
    name: 'app',
    data () {
      return {
        topTitle: '头部标题2'
      }
    },
    components: {first, second}
  }
</script>

<style scoped>
  @import './assets/iconfont/iconfont.css';

  html, body {
    height: 100%;
  }

  #app {
    max-width: 640px;
    min-width: 320px;
    margin: 0 auto;
    height: 100%;
    position: relative;
  }

  header {
    width: 100%;
    height: 50px;
    background-color: #268DCD;
    position: absolute;
    top:0;
    box-sizing: border-box;
    color:#fff;
  }

  header > .back {
    position: absolute;
    left: 15px;
    top: 16px;
    cursor: pointer;
    font-size:18px;
  }

  header > .title {
    width: 100%;
    line-height: 50px;
    text-align: center;
  }

  .mainBody {
    height: 100%;
    background-color: lightblue;
    padding-bottom:60px;
    padding-top: 40px;
  }
  .toolBar{
    font-size:0;
    height: 60px;
    width: 100%;
    position: fixed;
    bottom:0;
    background-color:#FEFEFE;
  }
  .toolBar>li{
    width: 50%;
    height: 100%;
    display: inline-block;
    font-size:15px;
    text-align: center;
    padding-top: 4px;
  }
  .toolBar>li>a{
    display: block;
  }
  .toolBar>li .playing{
    font-size:30px;
  }
  .toolBar>li .rightNow{
    font-size:25px;
  }
  .toolBar>li span{
    display: block;
    margin-top: 4px;
  }
</style>
