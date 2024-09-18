<template>
  <div class="modelSet">
    <div class="head">
      <span class="title">小程序模板</span>
    </div>
    <div class="main">
      <div class="model_list">
        <div
          class="model_item"
          v-for="(item, index) in modelList"
          :key="index"
        ></div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  components: {},
  data() {
    return {
      modelList: [1, 1, 1],
    };
  },
  methods: {},
};
</script>
    
<style lang="scss" scoped>
.modelSet {
  .head {
    width: 1714px;
    height: 130px;
    background: #ffffff;
    border-radius: 20px;
    padding-top: 32px;
    padding-left: 35px;
    box-sizing: border-box;
    margin: 30px 0;
    .title {
      font-family: PingFang SC, PingFang SC;
      font-weight: 600;
      font-size: 22px;
      color: #3d3d3d;
    }
  }
  .main {
    width: 1714px;

    background: #ffffff;
    margin-bottom: 20px;
    padding-bottom: 143px;
    .model_list {
      display: flex;
      flex-wrap: wrap;
      padding-left: 30px;
      box-sizing: border-box;
      .model_item {
        width: 389px;
        height: 598px;
        background: #ffffff;
        border: 1px solid #9bdb4a;
        border-radius: 5px;
        margin-top: 30px;
        margin-right: 30px;
        &:nth-of-type(4n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
    