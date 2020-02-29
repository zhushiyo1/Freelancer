<template>
  <div class="personal-data">
    <div class="wrapper">
      <div class="title">Manage My Account</div>
      <div class="wrapList">
        <div class="item acea-row row-between-wrapper on">
          <div class="picTxt acea-row row-between-wrapper">
            <div class="pictrue">
              <VueCoreImageUpload
                class="btn btn-primary"
                :crop="false"
                compress="80"
                @imageuploaded="imageuploaded"
                :headers="headers"
                :max-file-size="5242880"
                :credentials="false"
                inputAccept="image/*"
                inputOfFile="file"
                :url="url"
                ref="upImg"
              >
                <div class="pictrue">
                  <img
                    src="https://qiniu.shulan95.com/d920524714b661bb66d2211df82e8627_1.jpg"
                  />
                </div>
              </VueCoreImageUpload>
              <!-- <div class="pictrue">
                <img
                  src="https://qiniu.shulan95.com/d920524714b661bb66d2211df82e8627_1.jpg"
                />
              </div> -->
              <img src="@assets/images/alter.png" class="alter" />
            </div>
            <div class="text">
              <div class="name line1">Zhusuxu</div>
              <div class="phone">bound phone：15988844417</div>
            </div>
          </div>
          <div
            class="currentBnt acea-row row-center-wrapper"
            style="color:#1883d9"
          >
            Current
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="item acea-row row-between-wrapper">
        <div>Account Name</div>
        <div class="input">
          <input type="text" />
        </div>
      </div>
      <div v-if="!userInfo.phone">
        <router-link
          :to="'/user/binding'"
          class="item acea-row row-between-wrapper"
        >
          <div>Bound Phone</div>
          <div class="input">
            Click bound phone<span
              class="iconfont icontiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"
            ></span>
          </div>
        </router-link>
      </div>
      <div>
        <router-link
          :to="'/change_password'"
          class="item acea-row row-between-wrapper"
        >
          <div>Password</div>
          <div class="input">
            Click change password<span
              class="iconfont icontiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"
            ></span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="modifyBnt" @click="submit">保存修改</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import { trim, VUE_APP_API_URL, isWeixin } from "@utils";
import VueCoreImageUpload from "vue-core-image-upload";
// // import { postUserEdit, getLogout, switchH5Login, getUser } from "@api/user";
// import { clearAuthStatus } from "@libs/wechat";
// import cookie from "@utils/store/cookie";
// import store from "@/store";
// import dayjs from "dayjs";

export default {
  name: "PersonalData",
  components: {
    VueCoreImageUpload
  },
  data: function() {
    return {
      url: `/upload/image`,
      headers: {
        "Authori-zation": "Bearer " + this.$store.state.app.token
      },
      avatar: "",
      isWeixin: false,
      currentAccounts: 0,
      switchUserInfo: [],
      userIndex: 0
    };
  },
  watch: {
    $route(n) {
      if (n.name === "PersonalData") this.$store.dispatch("USERINFO", true);
    }
  },
  computed: mapGetters(["userInfo"]),
  mounted: function() {
    // this.avatar = this.userInfo.avatar;
    // this.isWeixin = isWeixin();
    // this.getUserInfo();
  }
  // methods: {
  //   switchAccounts: function(index) {
  //     let that = this;
  //     this.userIndex = index;
  //     let userInfo = this.switchUserInfo[this.userIndex];
  //     if (this.switchUserInfo.length <= 1) return true;
  //     if (userInfo === undefined)
  //       return this.$dialog.toast({ mes: "切换的账号不存在" });
  //     if (userInfo.user_type === "h5") {
  //       switchH5Login()
  //         .then(({ data }) => {
  //           that.$dialog.loading.close();
  //           const expires_time = dayjs(data.expires_time);
  //           store.commit("LOGIN", data.token, expires_time);
  //           that.$emit("changeswitch", false);
  //           location.reload();
  //         })
  //         .catch(err => {
  //           that.$dialog.loading.close();
  //           return that.$dialog.toast({ mes: err });
  //         });
  //     } else {
  //       cookie.set("loginType", "wechat", 60);
  //       this.$dialog.loading.close();
  //       this.$store.commit("LOGOUT");
  //       clearAuthStatus();
  //       this.$emit("changeswitch", false);
  //       location.reload();
  //     }
  //   },
  //   getUserInfo: function() {
  //     let that = this;
  //     getUser().then(res => {
  //       let switchUserInfo = res.data.switchUserInfo;
  //       for (let i = 0; i < switchUserInfo.length; i++) {
  //         if (switchUserInfo[i].uid == that.userInfo.uid) that.userIndex = i;
  //         if (
  //           !that.isWeixin &&
  //           switchUserInfo[i].user_type != "h5" &&
  //           switchUserInfo[i].phone === ""
  //         )
  //           switchUserInfo.splice(i, 1);
  //       }
  //       that.$set(this, "switchUserInfo", switchUserInfo);
  //     });
  //   },
  //   imageuploaded(res) {
  //     if (res.status !== 200)
  //       return this.$dialog.error(res.msg || "上传图片失败");
  //     if (this.switchUserInfo[this.userIndex] === undefined) return;
  //     this.$set(this.switchUserInfo[this.userIndex], "avatar", res.data.url);
  //   },

  //   submit: function() {
  //     let userInfo = this.switchUserInfo[this.userIndex];
  //     postUserEdit({
  //       nickname: trim(this.userInfo.nickname),
  //       avatar: userInfo.avatar
  //     }).then(
  //       res => {
  //         this.$store.dispatch("USERINFO", true);
  //         this.$dialog.success(res.msg);
  //         this.$router.go(-1);
  //       },
  //       error => {
  //         this.$dialog.error(error.msg);
  //       }
  //     );
  //   },
  //   logout: function() {
  //     this.$dialog.confirm({
  //       mes: "确认退出登录?",
  //       opts: () => {
  //         getLogout()
  //           .then(res => {
  //             this.$store.commit("LOGOUT");
  //             clearAuthStatus();
  //             location.href = location.origin;
  //             console.log(res);
  //           })
  //           .catch(err => {
  //             console.log(err);
  //           });
  //       }
  //     });
  //   }
  // }
};
</script>
