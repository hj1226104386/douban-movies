<template>
  <div class="first">
    <h1>{{msg}}</h1>
    <ul class='list'>
      <li v-for='(one , index) in datas'>片名：{{one.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'second',
    data () {
      return {
        msg: '我是第二个子页面',
        datas: []
      }
    },
    created: function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {emulateJSON: true})
        .then(function (res) {
          // 正确的回调
          this.datas = res.data.subjects
        }, function (res) {
          alert('出错了')
        })
    }
  }
</script>


<style scoped>
  .list{

  }
</style>
