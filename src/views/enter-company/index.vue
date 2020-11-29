<template>
  <div class="enter-container">
    <!-- 导航栏 -->
    <van-nav-bar left-text="入住商务部" left-arrow class="page-nav" @click-left="$router.back()" />

    <van-form @submit="onSubmit" class="panel-info" label-width="95px" input-align="right" ref="companyForm">
      <van-cell title="企业资料" />
      <van-field v-model="companyForm.legal_types" name="legal_types" label="*法人类型" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="companyForm.firm_name" name="firm_name" label="*企业名称" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="companyForm.show_name" name="show_name" label="*显示名称" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="companyForm.credit_code" name="credit_code" label="*社会信用代码" :rules="[{ required: true, message: '请填写用户名' }]" placeholder="请输入18位统一社会信用" />
      <van-field v-model="companyForm.register_time" name="register_time" label="*注册时间" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="companyForm.register_money" name="register_money" label="*注册资本(万元)" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="companyForm.register_local" name="register_local" label="*注册地区" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="companyForm.firm_types" name="firm_types" label="*企业类型" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="companyForm.primary_business" name="primary_business" label="*主营业务"> </van-field>
      <van-cell class="yewu-tag">
        <van-tag plain round size="large">月嫂</van-tag>
        <van-tag plain round size="large">育婴师</van-tag>
        <van-tag plain round size="large">保洁/清洁</van-tag>
        <van-tag plain round size="large">保姆</van-tag>
        <van-tag plain round size="large">早教/托育</van-tag>
        <van-tag plain round size="large">养老/陪护</van-tag>
        <van-tag plain round size="large">家装/搬家</van-tag>
        <van-tag plain round size="large">产康师</van-tag>
      </van-cell>
    </van-form>

    <div class="nextbtn">
      <van-button block native-type="submit" @click="onSubmit">下一步</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnterCompany',
  data() {
    return {
      companyForm: {
        legal_types: '企业法人'
      }
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', this.companyForm)
    }
  }
}
</script>

<style lang="less" scoped>
.enter-container {
  background-color: #f8f8f8;
  .page-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 180px;
  }

  .panel-info {
    .van-field,
    .van-cell {
      z-index: 1;
      font-weight: bold;
      font-size: 26px;
      height: 110px;
    }

    width: 704px;
    height: 1270px;
    margin: 126px 22px 28px 24px;

    .yewu-tag {
      height: 165px;
      .van-tag {
        margin-right: 40px;
        margin-bottom: 20px;
        padding: 10px 20px;
        font-size: 20px;
      }
    }
  }
  .nextbtn {
    .van-button--default {
      background-color: rgba(63, 81, 181, 100);
      color: #fff;
      font-size: 28px;
    }
  }
}
</style>
