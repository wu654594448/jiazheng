<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    111
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
</style>
