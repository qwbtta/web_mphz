<template>
  <div class="UploadWorks">
    <div class="head flex">
      <span @click="close">&lt;</span><span>上传作品</span>
    </div>
    <div class="main">
      <div class="main_left">
        <div class="title_row">作品分类</div>
        <div class="select flex">
          <span class="selected_value">{{ dataSelected.classification }}</span>
          <img
            class="arrow"
            :class="{ arrow_overturn: data1.showSelectList }"
            src="@/assets/img/arrow_1.png"
            alt=""
            @click="data1.showSelectList = !data1.showSelectList"
          />
          <div class="select_area" v-if="data1.showSelectList">
            <div class="select_list">
              <div
                class="slect_item"
                :class="{
                  slect_item_active: dataSelected.classification == item.value,
                }"
                v-for="(item, index) in data1.selectOptions"
                :key="index"
                @click="selectSingle('data1', 'classification', item.value)"
              >
                {{ item.value }}
              </div>
            </div>
          </div>
        </div>
        <div class="title_row">行业分类</div>
        <div class="select flex">
          <span class="selected_value">{{ dataSelected.industry }}</span>
          <img
            class="arrow"
            :class="{ arrow_overturn: data2.showSelectList }"
            src="@/assets/img/arrow_1.png"
            alt=""
            @click="data2.showSelectList = !data2.showSelectList"
          />
          <div class="select_area" v-if="data2.showSelectList">
            <div class="select_list">
              <div
                class="slect_item"
                :class="{
                  slect_item_active: dataSelected.industry == item.value,
                }"
                v-for="(item, index) in data2.selectOptions"
                :key="index"
                @click="selectSingle('data2', 'industry', item.value)"
              >
                {{ item.value }}
              </div>
            </div>
          </div>
        </div>
        <div class="title_row">
          作品标签
          <span class="title_tips">{{
            `还可以添加${3 - dataSelected.label.length}个`
          }}</span>
        </div>
        <div class="select flex">
          <span class="selected_value">{{ dataSelected.label.join(" ") }}</span>
          <img
            class="arrow"
            :class="{ arrow_overturn: data3.showSelectList }"
            src="@/assets/img/arrow_1.png"
            alt=""
            @click="data3.showSelectList = !data3.showSelectList"
          />
          <div class="select_area" v-if="data3.showSelectList">
            <div class="select_list">
              <div
                class="slect_item"
                :class="{
                  slect_item_active: item.selected,
                }"
                v-for="(item, index) in data3.selectOptions"
                :key="index"
                @click="selectLabel(item, index)"
              >
                {{ item.value }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main_right">
        <input type="text" class="word_title" placeholder="输入作品名称" />
        <textarea class="word_des" placeholder="输入作品详情"></textarea>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      data1: {
        selectOptions: [
          {
            value: "作品分类1",
            label: "黄金糕",
          },
          {
            value: "作品分类2",
            label: "黄金糕",
          },
          {
            value: "作品分类3",
            label: "黄金糕",
          },
          {
            value: "作品分类4",
            label: "黄金糕",
          },
          {
            value: "作品分类5",
            label: "黄金糕",
          },
        ],
        showSelectList: false,
      },
      data2: {
        selectOptions: [
          {
            value: "行业1",
            label: "黄金糕",
          },
          {
            value: "行业2",
            label: "黄金糕",
          },
          {
            value: "行业3",
            label: "黄金糕",
          },
          {
            value: "行业4",
            label: "黄金糕",
          },
          {
            value: "行业5",
            label: "黄金糕",
          },
        ],
        showSelectList: false,
      },
      data3: {
        selectOptions: [
          {
            value: "标签1",
            selected: false,
          },
          {
            value: "标签2",
            selected: false,
          },
          {
            value: "标签3",
            selected: false,
          },
          {
            value: "标签4",
            selected: false,
          },
          {
            value: "标签5",
            selected: false,
          },
        ],
        showSelectList: false,
      },
      dataSelected: {
        classification: "作品分类1",
        industry: "行业1",
        label: [],
      },
    };
  },
  methods: {
    close() {
      this.$router.go(-1);
    },
    selectSingle(variableName, key, value) {
      this.$set(this.dataSelected, key, value);
      this[variableName].showSelectList = false;
    },
    selectLabel(item, index) {
      let isIncrease = !this.data3.selectOptions[index].selected;
      if (isIncrease && this.dataSelected.label.length >= 3) {
        this.$message({
          message: "最多添加三个标签",
          type: "error",
        });
        return;
      }
      this.$set(this.data3.selectOptions[index], "selected", isIncrease);

      let temp = [];
      for (let i = 0; i < this.data3.selectOptions.length; i++) {
        if (this.data3.selectOptions[i].selected) {
          temp.push(this.data3.selectOptions[i].value);
        }
      }
      this.dataSelected.label = temp;
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.UploadWorks {
  width: 100%;
  height: 100%;
  background: #f6f7f8;
  .flex {
    display: flex;
    align-items: center;
  }
  .head {
    width: 100%;
    height: 80px;
    background: #151515;
    border-radius: 0 0 20px 20px;
    margin-bottom: 30px;
    span {
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: 18px;
      color: #ffffff;
      &:nth-of-type(1) {
        margin-left: 25px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
  .main {
    display: flex;
    .main_left {
      width: 460px;
      height: 1228px;
      background: #ffffff;
      flex-shrink: 0;
      margin-right: 20px;
      padding: 4px 24px 0 26px;
      box-sizing: border-box;
      .title_row {
        font-family: PingFang SC, PingFang SC;
        font-weight: 600;
        font-size: 22px;
        color: #434343;
        margin-top: 30px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title_tips {
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #898989;
        }
      }
      .select {
        width: 410px;
        height: 52px;
        background: #ffffff;
        border-radius: 10px;
        border: 1px solid #000000;
        box-sizing: border-box;
        justify-content: space-between;
        padding: 0 18px;
        position: relative;

        .selected_value {
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 16px;
          color: #898989;
        }
        .arrow {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
        .arrow_overturn {
          transform: scaleY(-1);
        }
        .select_area {
          position: absolute;
          left: 0;
          bottom: -250px;
          width: 410px;
          height: 240px;
          background: #ffffff;
          box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
          border-radius: 6px;
          z-index: 1;
          .select_list {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            box-sizing: border-box;
            padding: 20px 0 0 20px;
            .slect_item {
              width: 84px;
              height: 32px;
              box-sizing: border-box;
              border: 1px solid #cacaca;
              text-align: center;
              line-height: 32px;
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 14px;
              color: #3d3d3d;
              margin-right: 10px;
              margin-bottom: 10px;
              border-radius: 20px;
              cursor: pointer;
            }
            .slect_item_active {
              background: #9bdb4a;
              border: none;
              color: #ffffff;
            }
          }
        }
      }
    }
    .main_right {
      width: 100%;
      height: 1228px;
      background: #ffffff;
      margin-right: 20px;
      padding: 30px 54px 0 81px;
      box-sizing: border-box;
      .word_title {
        width: 100%;
        height: 74px;
        outline: none;
        border: none;
        border-bottom: 1px solid #dcdada;
        box-sizing: border-box;
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 30px;
        color: #434343;
        ::placeholder {
          color: #898989;
        }
      }
      .word_des {
        width: 100%;
        height: 953px;
        padding: 20px 0;
        box-sizing: border-box;
        background: transparent;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 18px;
        color: #434343;
        line-height: 21px;
        border: none;
        resize: none;
        outline: none;
        border-bottom: 1px solid #dcdada;
      }
    }
  }
}
</style>