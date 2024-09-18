<template>
  <div class="sidebar">
    <div class="logo"></div>
    <div class="devide_line"></div>
    <div class="menu">
      <div
        class="menu_item"
        v-for="(item, index) in menu_list"
        :key="item.name"
      >
        <div class="first_menu" @click="checkFirstMenu(item, index)">
          <div class="icon_con" :class="{ first_menu_active: item.isActive }">
            <i
              class="icon"
              :class="item.isActive ? item.activeClass : item.class"
            ></i>
          </div>
          <img
            class="arrow"
            src="@/assets/img/siderBar/arrow.png"
            alt=""
            v-if="item.childList.length > 0 && item.showChildList"
            @click.stop="changeToggle(index)"
          />
          <img
            class="arrow arrow_up"
            src="@/assets/img/siderBar/arrow.png"
            alt=""
            v-if="item.childList.length > 0 && !item.showChildList"
            @click.stop="changeToggle(index)"
          />
        </div>
        <div
          v-show="item.showChildList"
          v-for="(item2, index2) in item.childList"
          class="second_menu"
          :key="item2.name"
          @click="checkFirstMenu(item, index, item2, index2)"
        >
          <i
            class="second_icon"
            :class="item2.isActive ? item2.activeClass : item2.class"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu_list: [
        {
          name: "工作台",
          class: "workbench",
          activeClass: "workbench_active",
          path: "/",
          isActive: true,
          showChildList: false,
          childList: [],
        },
        {
          name: "小程序",
          class: "miniProgram",
          activeClass: "miniProgram_active",
          path: "",
          isActive: false,
          showChildList: true,
          childList: [
            {
              name: "小程序资料",
              path: "/programData",
              isActive: false,
              class: "programData",
              activeClass: "programData_active",
            },
            {
              name: "小程序制作",
              path: "/modelSet",
              isActive: false,
              class: "modelSet",
              activeClass: "modelSet_active",
            },
            {
              name: "作品管理",
              path: "/workManagement",
              isActive: false,
              class: "workManagement",
              activeClass: "workManagement_active",
            },
            // {
            //   name: "关联公众号",
            //   path: "",
            //   isActive: false,
            // },
            // {
            //   name: "更多设置",
            //   path: "",
            //   isActive: false,
            // },
          ],
        },
        {
          name: "通知中心",
          class: "notificationCenter",
          path: "",
          isActive: false,
          showChildList: true,
          childList: [],
        },
      ],
    };
  },
  methods: {
    changeToggle(index) {
      this.menu_list[index].showChildList =
        !this.menu_list[index].showChildList;
    },
    checkFirstMenu(item, index, item2, index2) {
      //选中一级菜单 打开该一级菜单的二级菜单
      this.menu_list[index].showChildList = true;
      for (let i = 0; i < this.menu_list.length; i++) {
        this.menu_list[i].isActive = i == index; //一级菜单选中状态唯一性
        if (this.menu_list[i].childList.length > 0) {
          for (let y = 0; y < this.menu_list[i].childList.length; y++) {
            this.menu_list[i].childList[y].isActive = false;
          }
        }
      }

      let path = "";
      if (!item2) {
        if (this.menu_list[index].childList.length > 0) {
          this.menu_list[index].childList[0].isActive = true; //点击一级菜单 默认选中第一个二级菜单

          path = this.menu_list[index].childList[0].path;
        } else {
          path = item.path;
        }
      } else {
        this.menu_list[index].childList[index2].isActive = true;
        if (item2.path) {
          path = item2.path;
        }
      }
      if (path && this.$route.path != path) {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  height: 1080px;
  margin-right: 30px;
  width: 140px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 64px;
    height: 64px;
    background: #dedede;
    margin-top: 38px;
  }
  .devide_line {
    width: 80px;
    height: 0px;
    border: 1px solid rgba(208, 208, 208, 0.48);
    margin-top: 23px;
    margin-bottom: 27px;
  }
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    .menu_item {
      .first_menu {
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 40px;
        cursor: pointer;
        .icon_con {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon {
            width: 30px;
            height: 30px;
            background-size: 30px 30px;
          }
        }
        .first_menu_active {
          background: #9bdb4a;
        }
        .workbench {
          background-image: url("@/assets/img/siderBar/workbench.png");
        }
        .workbench_active {
          background-image: url("@/assets/img/siderBar/workbench_active.png");
        }
        .miniProgram {
          background-image: url("@/assets/img/siderBar/miniProgram.png");
        }
        .miniProgram_active {
          background-image: url("@/assets/img/siderBar/miniProgram_active.png");
        }
        .notificationCenter {
          background-image: url("@/assets/img/siderBar/notificationCenter.png");
        }
        .arrow {
          width: 10px;
          height: 10px;
          position: absolute;
          left: 44px;
          top: 10px;
        }
        .arrow_up {
          transform: scaleY(-1);
        }
      }

      .second_menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        .second_icon {
          width: 30px;
          height: 30px;
          background-size: 30px 30px;
          margin-bottom: 54px;
        }
        .programData {
          background-image: url("@/assets/img/siderBar/dataEdit.png");
        }
        .programData_active {
          background-image: url("@/assets/img/siderBar/dataEdit_active.png");
        }
        .modelSet {
          background-image: url("@/assets/img/siderBar/modelSet.png");
        }
        .modelSet_active {
          background-image: url("@/assets/img/siderBar/modelSet_active.png");
        }
        .workManagement {
          background-image: url("@/assets/img/siderBar/workManagement.png");
        }
        .workManagement_active {
          background-image: url("@/assets/img/siderBar/workManagement_active.png");
        }
      }
    }
  }
}
</style>