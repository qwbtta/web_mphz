<template>
  <div class="home">
    <div class="head_row">
      <div class="search_area">
        <img class="search_icon" src="@/assets/img/search_2.png" alt="" />
        <input
          class="search_con"
          type="text"
          placeholder="请输入关键词"
          v-model="searchInput"
          @compositionstart="handleCompositionStart"
          @compositionend="handleCompositionEnd"
          @input="handleInput"
        />
      </div>
      <span class="date">数据统计时间：{{ time }}</span>
    </div>
    <div class="card_con">
      <div class="card_1">
        <div class="row1">
          <span>公司资料</span>
          <div class="edit">编辑</div>
        </div>
        <div class="subtitle">简介</div>
        <div class="info_con">
          <img class="avatar" src="@/assets/logo.png" alt="" />
          <div class="des_con">
            <span class="name">小野设计工作室</span>
            <div class="years">
              <div class="cirle"></div>
              <span>职业10年</span>
            </div>
          </div>

          <img class="contact phone" src="@/assets/img/phone.png" alt="" />
          <img class="contact wechat" src="@/assets/img/wechat.png" alt="" />
        </div>
        <div class="card_line_x"></div>
        <div class="subtitle">联系方式</div>
        <div class="info_con2">
          <div class="info_item">
            <span>联系电话</span>
            <span>15257954678</span>
          </div>
          <div class="card_line_y"></div>
          <div class="info_item">
            <span>电子邮箱</span>
            <span>mcdasqe5@163.com</span>
          </div>
          <div class="card_line_y"></div>
          <div class="info_item">
            <span>所属行业</span>
            <span>摄影/人文</span>
          </div>
        </div>
      </div>
      <div class="card_2_con">
        <div class="card_2 card_2_1">
          <span>昨日浏览数（次）</span>
          <span>0</span>
        </div>
        <div class="card_2 card_2_2">
          <span>昨日分享数（次）</span>
          <span>0</span>
        </div>
      </div>
      <div class="card_3">
        <div class="col_1">
          <span class="card_3_title">你的工作室小程序创作展示</span>
          <span class="card_3_des"
            >这里是您的小程序介绍产品简介客户丰富场景，持续支持
            提供各种行业解决方，产品简介客户丰富场景，持续支持
            提供各种行业解决方案。</span
          >
          <div class="btn_area btn_area_location">
            <div class="btn btn_type1">编辑小程序</div>
            <div class="btn btn_type2">手机预览</div>
          </div>
        </div>
        <img class="card_3_back" src="@/assets/img/card_3_back.png" alt="" />
        <img
          class="show_code"
          :class="{ location_expand: showCode }"
          src="@/assets/img/show_code.png"
          alt=""
          @click="showCode = !showCode"
        />
        <div class="code_area" :class="{ area_expand: showCode }">
          <div class="tips">
            <img class="code_icon" src="@/assets/img/code_icon.png" alt="" />
            <span>点击扫码预览查看你的小程序</span>
          </div>
          <div class="code" v-show="showCode"></div>
        </div>
      </div>
    </div>
    <div class="brand_management">
      <div class="title">品牌管理</div>
      <div class="func_list">
        <div class="func_item" v-for="item in funcList" :key="item.name">
          <img class="func_icon" :src="item.icon" alt="" />
          <span class="func_name">{{ item.name }}</span>
          <span class="func_des">{{ item.des }}</span>
          <div class="func_button">{{ item.button }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      time: "",
      searchInput: "", //用户搜索
      showCode: false,
      funcList: [
        {
          name: "资料设置",
          icon: require("@/assets/img/func_1.png"),
          des: "上传头像，编辑姓名、简介、成员等",
          button: "去编辑",
        },
        {
          name: "小程序",
          icon: require("@/assets/img/func_2.png"),
          des: "可定制专属小程序，并关联公众号",
          button: "去设置",
        },
        {
          name: "关联公众号",
          icon: require("@/assets/img/func_3.png"),
          des: "设置公众号菜单和顾客提醒",
          button: "去关联",
        },
        {
          name: "生成名片",
          icon: require("@/assets/img/func_4.png"),
          des: "朋友圈名片海报，更好的传播方式",
          button: "去设置",
        },
        {
          name: "作品管理",
          icon: require("@/assets/img/func_5.png"),
          des: "多种展示方式，提高客户转化率",
          button: "去管理",
        },
      ],
    };
  },
  methods: {
    handleCompositionStart() {
      // 开始拼音输入时，移除input事件监听
      this.inputEventBound = false;
    },
    handleCompositionEnd() {
      // 拼音输入结束时，重新绑定input事件监听
      this.inputEventBound = true;
      // 触发input事件，以便处理拼音输入后的逻辑
      this.handleInput();
    },
    handleInput() {
      if (this.inputEventBound) {
        // 只有当input事件监听器是绑定状态时才执行处理逻辑
      }
    },
    dateTypeFormat(fmt, date) {
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (const k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(
            ret[1],
            ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
          );
        }
      }
      return fmt;
    },
  },
  mounted() {
    this.time = this.dateTypeFormat("YYYY年mm月dd日 HH:MM:SS", new Date());
  },
};
</script>
<style lang="scss" scoped>
.head_row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  .search_area {
    display: flex;
    align-items: center;
    position: relative;
    .search_icon {
      width: 24px;
      height: 24px;
      position: absolute;
      left: 30px;
      top: 23px;
    }
    .search_con {
      width: 586px;
      height: 68px;
      border-radius: 36px;
      background: #fff;
      border: none;
      outline: none;
      padding: 0 20px 0 77px;
      box-sizing: border-box;
      font-family: PingFang SC, PingFang SC;
      font-weight: 400;
      font-size: 20px;
      color: #898989;
      &::placeholder {
        font-size: 20px;
        color: #898989;
      }
    }
  }
  .date {
    font-family: PingFang SC, PingFang SC;
    font-weight: 400;
    font-size: 20px;
    color: #151515;
  }
}
.card_con {
  display: flex;
  align-items: flex-start;
  .card_1 {
    width: 586px;
    height: 330px;
    background: #ffffff;
    border: 3px solid #9ce14a;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 0 32px 0 35px;
    .row1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 32px;
      margin-bottom: 29px;
      span {
        font-family: PingFang SC, PingFang SC;
        font-weight: 600;
        font-size: 22px;
        color: #151515;
      }
      .edit {
        width: 60px;
        height: 28px;
        background: #f9faf0;
        border-radius: 87px;
        border: 1px solid #f1a00f;
        font-family: Source Han Sans, Source Han Sans;
        font-weight: 400;
        font-size: 14px;
        color: #f1a00f;
        text-align: center;
        line-height: 28px;
        box-sizing: border-box;
      }
    }
    .subtitle {
      font-family: Source Han Sans, Source Han Sans;
      font-weight: 400;
      font-size: 14px;
      color: #151515;
      margin-bottom: 20px;
    }
    .info_con {
      display: flex;
      align-items: center;
      .avatar {
        width: 52px;
        height: 52px;
        border-radius: 50%;
      }
      .des_con {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        .name {
          font-family: PingFang SC, PingFang SC;
          font-weight: 600;
          font-size: 18px;
          color: #151515;
        }
        .years {
          display: flex;
          align-items: center;
          margin-top: 10px;
          .cirle {
            width: 4px;
            height: 4px;
            margin: 0 4px;
            border-radius: 4px;
            background: #9ce14a;
          }
          span {
            font-family: Source Han Sans, Source Han Sans;
            font-weight: 400;
            font-size: 14px;
            color: #9ce14a;
          }
        }
      }
      .contact {
        width: 44px;
        height: 44px;
        cursor: pointer;
      }
      .phone {
        margin-left: auto;
      }
      .wechat {
        margin-left: 20px;
      }
    }
    .card_line_x {
      width: 520px;
      height: 0px;
      border: 1px solid rgba(208, 208, 208, 0.48);
      margin: 22px 0;
    }
    .info_con2 {
      display: flex;
      align-items: center;
      .info_item {
        display: flex;
        flex-direction: column;
        span:nth-of-type(1) {
          font-family: PingFang SC, PingFang SC;
          font-weight: 500;
          font-size: 14px;
          color: #4e5a6e;
        }
        span:nth-of-type(2) {
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #898989;
          margin-top: 11px;
        }
      }
      .card_line_y {
        width: 0px;
        height: 42px;
        border: 1px solid rgba(208, 208, 208, 0.48);
        margin: 0 50px;
      }
    }
  }
  .card_2_con {
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    .card_2 {
      width: 400px;
      height: 150px;
      display: flex;
      flex-direction: column;
      background-size: 400px 150px;
      span {
        margin-left: 46px;
        &:nth-of-type(1) {
          font-family: PingFang SC, PingFang SC;
          font-weight: 500;
          font-size: 22px;
          color: #999999;
          margin-top: 36px;
        }
        &:nth-of-type(2) {
          font-family: DIN Alternate, DIN Alternate;
          font-weight: 700;
          font-size: 50px;
          color: #151515;
          margin-top: 12px;
        }
      }
    }
    .card_2_1 {
      background-image: url("@/assets/img/card_back1.png");
    }
    .card_2_2 {
      margin-top: 30px;
      background-image: url("@/assets/img/card_back2.png");
    }
  }
  .card_3 {
    width: 674px;
    height: 276px;
    background: #ffffff;
    box-shadow: 0px 25px 30px 0px rgba(92, 158, 14, 0.07);
    border-radius: 20px;
    display: flex;
    padding-left: 44px;
    box-sizing: border-box;
    position: relative;
    .col_1 {
      display: flex;
      flex-direction: column;
      .card_3_title {
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 22px;
        color: #3d3d3d;
        margin-top: 44px;
      }
      .card_3_des {
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #606060;
        line-height: 26px;
        width: 330px;
        margin-top: 14px;
      }
      .btn_area {
        display: flex;
        align-items: center;

        .btn {
          width: 110px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          font-family: Source Han Sans, Source Han Sans;
          font-weight: 400;
          font-size: 14px;
          border-radius: 193px;
          box-sizing: border-box;
          cursor: pointer;
        }
        .btn_type1 {
          background: #151515;
          color: #ffffff;
          border: 1px solid #151515;
          margin-right: 16px;
        }
        .btn_type2 {
          color: #151515;
          border: 1px solid #151515;
        }
      }
      .btn_area_location {
        margin-top: 37px;
      }
    }
    .card_3_back {
      width: 290px;
      height: 250px;
      margin-top: 26px;
    }
    .show_code {
      width: 58px;
      height: 58px;
      position: absolute;
      right: 71px;
      bottom: -27px;
      z-index: 2;
      cursor: pointer;
    }
    .location_expand {
      bottom: -120px;
      transform: scaleY(-1);
    }
    .code_area {
      width: 600px;
      height: 54px;
      position: absolute;
      left: 37px;
      bottom: -54px;
      z-index: 1;
      background: linear-gradient(180deg, #f4f9ef, #fff);
      border-radius: 0 0 20px 20px;
      border: 1px solid #d5f2b3;
      border-top: none;

      .tips {
        display: flex;
        align-items: center;
        margin-left: 29px;
        margin-top: 15px;
        .code_icon {
          width: 20px;
          height: 20px;
        }
        span {
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #606060;
          margin-left: 9px;
        }
      }
      .code {
        background: #898989;
        width: 70px;
        height: 70px;
        margin-left: 58px;
        margin-top: 14px;
      }
    }
    .area_expand {
      height: 150px;
      bottom: -150px;
    }
  }
}
.brand_management {
  width: 1720px;
  height: 562px;
  background: #ffffff;
  border-radius: 20px;
  padding-top: 32px;
  box-sizing: border-box;
  margin-top: 30px;
  .title {
    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    font-size: 22px;
    color: #151515;
    margin-left: 35px;
  }
  .func_list {
    display: flex;
    margin-top: 35px;
    padding-left: 53px;
    .func_item {
      width: 296px;
      height: 431px;
      background: #ffffff;
      box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 30px;
      .func_icon {
        width: 50px;
        height: 50px;
        margin-top: 110px;
      }
      .func_name {
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 18px;
        color: #151515;
        margin-top: 50px;
      }
      .func_des {
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #767676;
        width: 160px;
        margin-top: 10px;
      }
      .func_button {
        width: 87px;
        height: 34px;
        background: #151515;
        border-radius: 72px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 14px;
        color: #f5f8f9;
        line-height: 34px;
        text-align: center;
        margin-top: 33px;
        cursor: pointer;
      }
    }
  }
}
</style>