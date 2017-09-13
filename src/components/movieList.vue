<template>
  <div class="list">
    <ul class='moviePlaying'>
      <li v-for='(one,index) in movies' :data-id="one.id" @click="getDetail(one.id,$event)">
        <div class="left">
          <img :src="one.images.large">
        </div>
        <div class="right">
          <h4>{{one.title}}</h4>
          <p>主演：{{one.casts[0].name}}</p>
          <p>导演：{{one.directors[0].name}}</p>
          <p>上映时间：{{one.year}}</p>
          <p>类型：<span v-for='type in one.genres'>{{type}}、</span></p>
          <p>综合评分：{{one.rating.average}}、{{$store.state.msg}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import store from '../vuex/store'

  export default {
    name: 'movieList',
    data () {
      return {
        movies: ''
      }
    },
    store,
    created: function () {
      store.state.showLoading = true
      store.state.showBack = false
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?city=108288', {}, {emulateJSON: true})
        .then((res) => {
          this.movies = res.data.subjects
          store.state.showLoading = false
        }, (res) => {
          alert('获取数据失败')
        })
    },
    methods: {
      getDetail: function (id, event) {
        store.state.currentMovieId = id
        // 跳到详情组件
        this.$router.push({ path: '/detail' })
      }
    }
  }
</script>


<style scoped>
  .list {
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
  }

  .moviePlaying > li {
    height: 142px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .moviePlaying .left {
    float: left;
    width: 100px;
    height: 142px;
  }

  .left > img {
    width: 100%;
    height: 100%;
  }

  .moviePlaying .right {
    float: left;
    width: auto;
    height: 100%;
    margin-left: 10px;
  }

  .right > h4 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
  }

  .right > p {
    margin-top: 5px;
  }
</style>
