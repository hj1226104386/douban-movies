<template>
  <div class="loading">
    <div class="loadingContent">
      <img src="../assets/images/loading.gif">
      <p>玩命加载中...</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    data () {
      return {
        msg: '我是loading'
      }
    }
  }
</script>


<style scoped>
  .loading {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loadingContent {
    width: 100px;
    height: 100px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, .5);
    text-align: center;
    padding-top: 15px;
  }

  .loadingContent > img {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }
</style>
