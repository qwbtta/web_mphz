<template>
  <div class="workManagement">
    <div class="head">
      <div class="title_con flex">
        <span class="title">作品管理</span>
        <div class="upload_btn" @click="$router.push('/UploadWorks')">
          上传作品
        </div>
      </div>
      <div class="menu_1 flex">
        <div
          class="menu_item"
          v-for="(item, index) in menuList"
          :key="item.menuName"
          :class="{ menu_item_active: index == activeMenuIndex[0] }"
          @click="changeMenu(0, index)"
        >
          {{ item.menuName }}
        </div>
      </div>
      <div class="menu_row flex">
        <span class="row_item" style="cursor: unset">分类</span>
        <div
          class="row_item"
          :class="{ row_item_active: 0 == activeMenuIndex[1] }"
          @click="changeMenu(1, 0)"
        >
          全部
        </div>
        <div
          class="row_item"
          v-for="(item, index) in menuList[activeMenuIndex[0]].chlidList"
          :key="index"
          :class="{ row_item_active: index + 1 == activeMenuIndex[1] }"
          @click="changeMenu(1, index + 1)"
        >
          {{ item }}
        </div>
      </div>
      <div class="menu_row flex">
        <span class="row_item" style="cursor: unset">行业</span>
        <div
          class="row_item"
          :class="{ row_item_active: 0 == activeMenuIndex[2] }"
          @click="changeMenu(2, 0)"
        >
          全部
        </div>
        <div
          class="row_item"
          v-for="(item, index) in menuList[activeMenuIndex[0]].chlidList"
          :key="index"
          :class="{ row_item_active: index + 1 == activeMenuIndex[2] }"
          @click="changeMenu(2, index + 1)"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="word_area">
      <div class="work_item" v-for="(item, index) in workList" :key="index">
        <img class="work_cover" src="@/assets/img/card_1.png" alt="" />
        <span class="work_title">锦瑟安年动画设计</span>
        <span class="work_time">2021-09-10</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      menuList: [
        {
          menuName: "平面",
          chlidList: ["UI设计", "包装设计", "商业插画"],
        },
        {
          menuName: "动画",
          chlidList: [],
        },
        {
          menuName: "视频",
          chlidList: [],
        },
      ],
      activeMenuIndex: [0, 0, 0],
      workList: [1, 1, 1, 1, 1, 1],
    };
  },
  methods: {
    changeMenu(Hierarchy, index) {
      this.$set(this.activeMenuIndex, Hierarchy, index);
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
}
.workManagement {
  padding-top: 30px;
  .head {
    width: 1714px;
    height: 220px;
    background: #ffffff;
    border-radius: 20px;
    box-sizing: border-box;
    padding-left: 35px;
    padding-top: 25px;
    .title_con {
      justify-content: space-between;
      .title {
        font-family: PingFang SC, PingFang SC;
        font-weight: 600;
        font-size: 22px;
        color: #3d3d3d;
      }
      .upload_btn {
        width: 110px;
        height: 40px;
        background: #9bdb4a;
        border-radius: 193px;
        text-align: center;
        line-height: 40px;
        font-family: Source Han Sans, Source Han Sans;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        margin-right: 37px;
        cursor: pointer;
      }
    }

    .menu_1 {
      height: 40px;
      width: 1650px;
      border-bottom: 1px solid #d8d8d8;
      box-sizing: border-box;
      margin-top: 10px;
      .menu_item {
        height: 40px;
        width: 60px;
        font-family: Source Han Sans, Source Han Sans;
        font-weight: 400;
        font-size: 18px;
        color: #3d3d3d;
        text-align: center;
        line-height: 40px;
        box-sizing: border-box;
        margin-right: 35px;
        cursor: pointer;
      }
      .menu_item_active {
        font-weight: 500;
        color: #9bdb4a;
        border-bottom: 2px solid #9bdb4a;
      }
    }
    .menu_row {
      margin-top: 19px;
      .row_item {
        padding: 0 12px;
        height: 24px;
        margin-right: 22px;
        cursor: pointer;
      }
      .row_item_active {
        color: #9bdb4a;
        background: #f4faf0;
        border-radius: 3px;
      }
    }
  }
  .word_area {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    padding: 12px 0 8px 34px;
    box-sizing: border-box;
    width: 1714px;
    background: #ffffff;
    border-radius: 20px;
    .work_item {
      display: flex;
      flex-direction: column;
      margin-right: 37px;
      margin-bottom: 30px;
      cursor: pointer;
      .work_cover {
        width: 382px;
        height: 237px;
      }
      .work_title {
        font-family: Source Han Sans, Source Han Sans;
        font-weight: 500;
        font-size: 18px;
        color: #3d3d3d;
        margin-top: 13px;
      }
      .work_time {
        font-family: Source Han Sans, Source Han Sans;
        font-weight: 400;
        font-size: 14px;
        color: #838589;
        margin-top: 5px;
      }
    }
  }
}
</style>
