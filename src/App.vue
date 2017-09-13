<template>
  <div id="app">
    <header>
      <span v-show="$store.state.showBack===false" class='back iconfont icon-back'></span>
      <p class='title'>豆瓣电影</p>
    </header>
    <div class="mainBody">
      <router-view></router-view>
    </div>
    <ul class="toolBar">
      <li>
        <router-link to='/movieList'>
          <i class='playing iconfont icon-ing'></i>
          <span class=toolIcon>正在热映</span>
        </router-link>
      </li>
      <li>
        <router-link to='/second'>
          <i class='rightNow iconfont icon-rightnow'></i>
          <span class=toolIcon>即将上映</span>
        </router-link>
      </li>
    </ul>
    <loading v-show='$store.state.showLoading===true'></loading>
  </div>
</template>

<script>
  import movieList from './components/movieList.vue'
  import detail from './components/detail.vue'
  import loading from './components/loading.vue'
  import store from './vuex/store'
  export default {
    name: 'app',
    data () {
      return {}
    },
    store,
    components: {movieList, detail, loading},
    created: function () {
      this.showLoading = true
    }
  }
</script>

<style scoped>
  @import './assets/iconfont/iconfont.css';

  .router-link-active {
    color: #268DCD;
  }

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
    top: 0;
    box-sizing: border-box;
    color: #fff;
  }

  header > .back {
    position: absolute;
    left: 15px;
    top: 16px;
    cursor: pointer;
    font-size: 18px;
  }

  header > .title {
    width: 100%;
    line-height: 50px;
    text-align: center;
  }

  .mainBody {
    height: 100%;
    padding-bottom: 60px;
    padding-top: 50px;
  }

  .toolBar {
    height: 60px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #ccc;
    overflow: hidden;
  }

  .toolBar > li {
    width: 50%;
    height: 100%;
    float: left;
    font-size: 15px;
    text-align: center;
    padding-top: 4px;
  }

  .toolBar > li:nth-child(2) {
    padding-top: 9px;
  }

  .toolBar > li > a {
    display: block;
  }

  .toolBar > li .playing {
    font-size: 30px;
  }

  .toolBar > li .rightNow {
    font-size: 25px;
  }

  .toolBar > li span {
    display: block;
    margin-top: 4px;
  }
</style>
