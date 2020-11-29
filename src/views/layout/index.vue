<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />

    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/company">家服公司</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/worker">家服人员</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.layout-container {
  .van-tabbar-item {
    font-size: 24px;
  }
  .van-icon {
    font-size: 28px;
  }
}
</style>
