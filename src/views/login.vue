<template>
  <div class="login">
    <div class="login_con">
      <div class="con_left"></div>
      <div class="con_right">
        <span class="title">欢迎登录名片盒子后台</span>
        <span class="des">这里是名片盒子后台的简短介绍</span>
        <div class="code_con"></div>
        <!-- <div class="login_btn">登录</div> -->
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
  
  <style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #f6f7f8;
  .login_con {
    width: 762px;
    height: 534px;
    background: #ffffff;
    box-shadow: 0px 0px 68px 0px rgba(0, 0, 0, 0.03);
    border-radius: 14px;
    display: flex;
    overflow: hidden;
    .con_left {
      width: 290px;
      height: 534px;
      background: darkcyan;
    }
    .con_right {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 472px;
      .title {
        font-family: Source Han Sans, Source Han Sans;
        font-weight: 700;
        font-size: 24px;
        color: #1fba87;
        margin-top: 89px;
      }
      .des {
        font-family: Source Han Sans, Source Han Sans;
        font-weight: 400;
        font-size: 14px;
        color: #3d3d3d;
        line-height: 20px;
        margin-top: 5px;
      }
      .code_con {
        width: 160px;
        height: 160px;
        background: #eeeeee;
        border-radius: 4px;
        margin-top: 34px;
      }
      .login_btn {
        width: 180px;
        height: 42px;
        background: #1fba87;
        border-radius: 72px;
        text-align: center;
        line-height: 42px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #f2f6fa;
        cursor: pointer;
      }
    }
  }
}
</style>
  