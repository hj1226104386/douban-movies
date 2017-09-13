<template>
  <div class="rightNow">
    <p>即将上映</p>
  </div>
</template>

<script>
  import store from '../vuex/store'

  export default {
    name: 'second',
    data () {
      return {
        detailMsg: ''
      }
    },
    store,
    created: function () {
      store.state.showLoading = true
      store.state.showBack = false
      var getId = store.state.currentMovieId
      this.$http.jsonp('https://api.douban.com/v2/movie/subject/' + getId, {}, {emulateJSON: true})
        .then(function (res) {
          // 正确的回调
          this.detailMsg = res.body
          store.state.showLoading = false
        }, function (res) {
          alert('出错了')
        })
    }
  }
</script>


<style scoped>
  .detail {
    padding: 15px 10px 10px 10px;
    height: 100%;
    overflow-y: scroll;
  }

  .moviePic {
    float: left;
    width: 150px;
    height: 222px;
  }

  .moviePic > img {
    width: 100%;
    height: 100%;
  }

  .detailMsg {
    height: 222px;
    width: auto;
    padding-left: 160px;
    padding-top: 5px;
  }

  .detailMsg > h4 {
    font: 700 18px/1 'Microsoft Yahei';
    margin-bottom: 8px;
  }

  .detailMsg > h4 > small {
    font-size: 16px;
    margin-left: 10px;
  }

  .detailMsg > p {
    font-size: 16px;
    line-height: 22px;
  }

  .description {
    clear: both;
    padding-top: 12px;
    font-size: 16px;
  }

  .description > h4 {
    margin-bottom: 5px;
  }

  .description > p {
    text-indent: 2em;
    line-height: 22px;
  }
</style>
