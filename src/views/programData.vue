<template>
  <div class="programData">
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
      <div class="card1">
        <span class="title">小野设计小程序</span>
        <div class="main_con">
          <span
            >这里是您的小程序介绍产品简介客户丰富场景，持续支持 提供各种持续支持
            提供各种行业解决方案。</span
          >
          <div class="code_con"></div>
        </div>
      </div>
      <div class="card2">
        <div class="card_title">小程序基本资料</div>
        <div class="card_row">
          <div class="input_item">
            <span class="item_tile">小程序的名称</span>
            <input
              type="text"
              class="text_input width260"
              placeholder="小程序名称"
            />
          </div>
          <div class="input_item">
            <span class="item_tile">程序主体信息</span>
            <input
              type="text"
              class="text_input width260"
              placeholder="程序主体信息"
            />
          </div>
        </div>
        <div class="card_row">
          <div class="input_item">
            <span class="item_tile">认证主题类型</span>
            <input
              type="text"
              class="text_input width260"
              placeholder="认证主题类型"
            />
          </div>
          <div class="input_item">
            <span class="item_tile">扫码推广物料</span>
            <input
              type="text"
              class="text_input width260"
              placeholder="扫码推广物料"
            />
          </div>
        </div>
        <div class="input_item">
          <span class="item_tile">小程序的介绍</span>
          <input
            type="text"
            class="text_input width730"
            placeholder="请填写介绍"
          />
        </div>
        <div class="btn_area btn_area_location1">
          <div class="btn btn_type1">修改资料</div>
          <div class="btn btn_type2" @click="saveData">保存资料</div>
        </div>
      </div>
    </div>
    <div class="data_con">
      <div class="con_title">团队管理</div>
      <div class="data_row">
        <div class="data_item" style="margin-right: 200px">
          <span class="data_title">团队昵称</span>
          <input
            type="text"
            class="text_input width500"
            placeholder="请填写团队昵称"
          />
        </div>
        <div class="data_item">
          <span class="data_title">账号ID</span>
          <input
            type="text"
            class="text_input width500"
            placeholder="请填写账号ID"
          />
        </div>
      </div>
      <div class="data_row">
        <div class="data_item" style="margin-right: 200px">
          <span class="data_title">地区位置</span>
          <input
            type="text"
            class="text_input width500"
            placeholder="请输入地址"
          />
        </div>
        <div class="data_item">
          <span class="data_title">地区定位</span>
          <div class="location_con">
            <div class="get_adress">点击获取地址</div>
          </div>
        </div>
      </div>
      <div class="special_data_item">
        <span class="data_title">介绍</span>
        <textarea class="main_introdue"></textarea>
      </div>
      <div class="special_data_item">
        <span class="data_title">营业执照</span>
        <div
          v-if="!businessicenseUrl"
          class="business_icense"
          @click="uploadImg('businessicensel')"
        >
          <img src="@/assets/img/img_upload.png" alt="" />
          <span>上传图片</span>
        </div>
        <div v-else class="imgPreview">
          <img class="imgPreview" :src="businessicenseUrl" alt="" />
          <img
            class="delete"
            @click="businessicenseUrl = ''"
            src="@/assets/img/delete.png"
            alt=""
          />
        </div>
      </div>
      <div class="special_data_item">
        <span class="data_title no_margin_top">团队成员</span>
        <div class="staff_list">
          <div
            class="staff_item"
            v-for="(item, index) in staffList"
            :key="index"
          >
            <img
              class="delete"
              @click="deleteStaff(index)"
              src="@/assets/img/delete.png"
              alt=""
            />

            <div class="avatar_con">
              <span v-if="!item.avatar" @click="uploadImg('dealAvatar', index)"
                >添加头像</span
              >
              <img v-else class="avatar" :src="item.avatar" alt="" />
            </div>
            <div class="text_con">
              <input
                class="name"
                type="text"
                v-model="item.name"
                placeholder="成员名字/昵称"
              />
              <textarea
                class="introduce"
                v-model="item.introduce"
                placeholder="成员信息介绍"
              ></textarea>
            </div>
          </div>
          <div class="add" @click="addStaff">添加成员</div>
        </div>
      </div>
      <div class="devide_line"></div>
      <div class="btn_area btn_area_location2">
        <div class="btn btn_type1">修改资料</div>
        <div class="btn btn_type2" @click="saveData">保存资料</div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      time: "",
      searchInput: "", //用户搜索
      inputEventBound: true, //输入监听器
      pograminfo: {
        logoUrl: "",
        briefIntroduction: "",
        subjectInformation: "",
        introduce: "",
      },
      businessicenseUrl: "", //营业执照照片
      staffList: [], //团队成员
    };
  },
  methods: {
    resetInfo(infoName) {
      for (let key in this[infoName]) {
        this[infoName][key] = "";
      }
    },
    saveData() {
      this.$message({
        message: "保存成功",
        type: "success",
      });
    },
    uploadImg(deal, index = 0) {
      if (document.getElementById("fileInput")) {
        document.body.removeChild(document.getElementById("fileInput"));
      }
      let input = document.createElement("input");
      input.id = "fileInput";
      input.type = "file";
      input.style.display = "none";
      input.accept = ".png,.jpg,.jpeg,.PNG,.JPG,.JPEG";

      document.body.appendChild(input);
      input.addEventListener("change", (e) => {
        this[deal](input.files[0], index);
      });
      input.click();
    },
    businessicensel(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        let imgUrl = e.target.result;
        this.businessicenseUrl = imgUrl;
      };
      reader.readAsDataURL(file);
    },
    dealAvatar(file, index) {
      const reader = new FileReader();
      reader.onload = (e) => {
        let imgUrl = e.target.result;
        this.staffList[index].avatar = imgUrl;
      };
      reader.readAsDataURL(file);
    },
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
    addStaff() {
      this.staffList.push({
        avatar: "",
        name: "",
        introduce: "",
      });
    },
    deleteStaff(index) {
      this.staffList.splice(index, 1);
    },
  },
  mounted() {
    this.time = this.dateTypeFormat("YYYY年mm月dd日 HH:MM:SS", new Date());
  },
};
</script>
  
<style lang="scss" scoped>
.programData {
  padding-bottom: 73px;
  .text_input {
    height: 46px;
    border: 1px solid rgba(106, 102, 102, 0.23);
    outline: none;
    box-sizing: border-box;
    font-family: PingFang SC, PingFang SC;
    font-weight: 400;
    font-size: 18px;
    color: #151515;
    background: #ffffff;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    padding: 0 19px;
    &::placeholder {
      color: #898989;
    }
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

  .main_introdue {
    width: 1297px;
    min-height: 88px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    border: 1px solid rgba(106, 102, 102, 0.23);
    outline: none;
    box-sizing: border-box;
    font-family: PingFang SC, PingFang SC;
    font-weight: 400;
    font-size: 18px;
    color: #434343;
    resize: none;
    padding: 8px 19px;
  }
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
    align-items: center;
    margin-bottom: 30px;
    .card1 {
      width: 460px;
      height: 360px;
      margin-right: 30px;
      background: url("@/assets/img/card_1.png") no-repeat center / 460px 360px;
      padding-top: 177px;
      box-sizing: border-box;
      .title {
        font-family: PingFang SC, PingFang SC;
        font-weight: 600;
        font-size: 20px;
        color: #3d3d3d;
        margin-left: 48px;
      }
      .main_con {
        display: flex;
        margin-top: 23px;
        margin-left: 48px;
        span {
          width: 250px;
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #606060;
          line-height: 26px;
          margin-right: 18px;
        }
        .code_con {
          width: 96px;
          height: 96px;
          background: #fff;
        }
      }
    }
    .card2 {
      width: 1225px;
      height: 360px;
      padding-left: 35px;
      box-sizing: border-box;
      background: url("@/assets/img/card_2.png") no-repeat center / 1225px 360px;
      .card_title {
        font-family: PingFang SC, PingFang SC;
        font-weight: 600;
        font-size: 22px;
        color: #151515;
        margin-top: 32px;
        margin-bottom: 26px;
      }
      .card_row {
        display: flex;
        align-items: center;
        margin-bottom: 22px;
      }
      .input_item {
        display: flex;
        align-items: center;
        margin-right: 90px;
        .item_tile {
          font-family: PingFang SC, PingFang SC;
          font-weight: 600;
          font-size: 18px;
          color: #3d3d3d;
          margin-right: 14px;
        }
        .width260 {
          width: 260px;
        }
      }
      .width730 {
        width: 730px;
      }
      .btn_area_location1 {
        margin-top: 27px;
      }
    }
  }
  .data_con {
    padding: 32px 0 52px 35px;
    width: 1720px;
    background: #ffffff;
    box-sizing: border-box;
    border-radius: 20px;
    .con_title {
      font-family: PingFang SC, PingFang SC;
      font-weight: 600;
      font-size: 22px;
      color: #151515;
      margin-bottom: 30px;
    }
    .data_row {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      .data_item {
        display: flex;
        align-items: center;
        .data_title {
          width: 72px;
          font-family: PingFang SC, PingFang SC;
          font-weight: 600;
          font-size: 18px;
          color: #3d3d3d;
          text-align: right;
          margin-right: 24px;
        }
        .width500 {
          width: 500px;
        }
        .location_con {
          width: 500px;
          height: 46px;
          background: #ffffff;
          box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
          border-radius: 7px 7px 7px 7px;
          border: 1px solid rgba(106, 102, 102, 0.23);
          position: relative;
          .get_adress {
            position: absolute;
            left: 19px;
            top: 12px;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 18px;
            color: #0093ff;
            border-bottom: 1px solid #0093ff;
            cursor: pointer;
          }
        }
      }
    }
    .special_data_item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
      .data_title {
        width: 72px;
        font-family: PingFang SC, PingFang SC;
        font-weight: 600;
        font-size: 18px;
        color: #3d3d3d;
        text-align: right;
        margin-right: 24px;
        margin-top: 13px;
      }
      .no_margin_top {
        margin-top: unset;
      }
      .data_item_textarea {
        display: flex;
        align-items: center;
      }
      .business_icense {
        width: 400px;
        height: 200px;
        background: #ffffff;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
        border-radius: 7px;
        border: 1px solid rgba(106, 102, 102, 0.23);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 44px;
          height: 44px;
        }
        span {
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 18px;
          color: #898989;
          margin-top: 4px;
        }
      }
      .imgPreview {
        width: 400px;
        height: 200px;
        position: relative;
        img {
          width: 400px;
          height: 200px;
        }
        .delete {
          position: absolute;
          top: -1px;
          right: -1px;
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }
      .staff_list {
        display: flex;
        flex-direction: column;
        .staff_item {
          width: 1297px;
          height: 110px;
          background: #f5f8f9;
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 24px;
          .avatar_con {
            width: 72px;
            height: 72px;
            margin: 0 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #6d6d6d;
            border: 1px solid rgba(106, 102, 102, 0.23);
            box-sizing: border-box;
            cursor: pointer;
            .avatar {
              width: 72px;
              height: 72px;
            }
          }

          .text_con {
            display: flex;
            flex-direction: column;
            .name {
              font-family: PingFang SC, PingFang SC;
              font-weight: 500;
              font-size: 16px;
              color: #434343;
              margin-bottom: 6px;
              height: 22px;
              border: none;
              outline: none;
              box-sizing: border-box;
              background: transparent;
            }
            .introduce {
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 14px;
              color: #6d6d6d;
              line-height: 21px;
              width: 1129px;
              height: 44px;
              background: transparent;
              line-height: 21px;
              border: none;
              resize: none;
              outline: none;
            }
          }
          .delete {
            width: 20px;
            height: 20px;
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
          }
        }
      }
      .add {
        width: 110px;
        height: 40px;
        background: #9bdb4a;
        border-radius: 193px;
        border: 1px solid #9bdb4a;
        text-align: center;
        line-height: 40px;
        font-family: Source Han Sans, Source Han Sans;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        margin-bottom: 48px;
        cursor: pointer;
      }
    }
    .devide_line {
      width: 1663px;
      height: 0px;
      border: 1px solid #dcdada;
    }
    .btn_area_location2 {
      justify-content: flex-end;
      padding-right: 41px;
      margin-top: 37px;
    }
  }
}
</style>