<template>
  <div class="home">
    <van-cell value="家政平台" class="page-title" />
    <!-- 图片区域 -->
    <div class="swiper-container">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red" loop>
        <van-swipe-item v-for="(images, index) in swiperList" :key="index">
          <img :src="images" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- grid宫格 -->
    <van-grid :gutter="10" column-num="3" class="grid-nav" clickable :border="false">
      <van-grid-item text="入住商务部" to="/home/entercompany" />
      <van-grid-item text="家政求职" />
      <van-grid-item text="找家庭服务" />
      <van-grid-item text="线上家庭培训" />
      <van-grid-item text="线上家政保险" />
      <van-grid-item text="合同" />
    </van-grid>
  </div>
</template>

<script>
import { getSwipers } from '@/api/home'
export default {
  name: 'HomeIndex',
  components: {},
  props: {},
  data() {
    return {
      swiperList: [] // 轮播图数据
    }
  },
  computed: {},
  watch: {},
  created() {
    this.loadSwipers()
  },
  mounted() {},
  methods: {
    async loadSwipers() {
      try {
        const data = await getSwipers()
        // console.log(data)
        this.swiperList = data.data
        // console.log(this.swiperList)
      } catch (error) {
        this.$toast('图片加载失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
.home {
  .page-title {
    background-color: rgba(63, 81, 181, 100);
    .van-cell__value--alone {
      color: #fff !important;
      font-size: 32px;
    }
  }

  .swiper-container {
    height: 300px;
    background-color: rgba(63, 81, 181, 100);
    padding: 0 30px 40px 34px;
  }
  .my-swipe .van-swipe-item {
    height: 282px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  /deep/.grid-nav {
    margin-top: 34px;
    .van-grid-item {
      height: 174px;

      .van-grid-item__content {
        border: none;
        border-radius: 12px;
        background-color: rgba(238, 236, 236, 100);
      }
    }
  }
}
</style>
