<template>
  <div>
    <div class="app" v-cloak>
      <!--      <transition :name="transitionName">-->
      <keep-alive :include="include" :max="10">
        <router-view class="router" ref="router"></router-view>
      </keep-alive>
      <!--      </transition>-->
    </div>
    <Footer v-if="footer === true"></Footer>
  </div>
</template>
<script>
function isKeepAlive($route) {
  return $route.meta.keepAlive === undefined || $route.meta.keepAlive;
}

import Footer from "@components/Footer";
import { mapGetters } from "vuex";
// import { openShareAll } from "@libs/wechat";
// import { getShare } from "@api/public";
// import { isWeixin } from "@utils/index";

export default {
  data() {
    return {
      transitionName: "fold-right",
      include: isKeepAlive(this.$route) ? [this.$route.name] : [],
      history: []
    };
  },
  provide() {
    return {
      app: this
    };
  },
  computed: mapGetters(["footer", "home", "isLogin"]),
  components: { Footer },
  watch: {
    $route(to, from) {
      const lastPath = this.history[this.history.length - 1] || {},
        { isReplace, isBack } = this.$router;

      if (lastPath.path === to.path) {
        this.transitionName = "fold-right";
        this.history.pop();
      } else {
        this.transitionName = "fold-left";
        if (!isReplace) this.history.push({ path: from.path, name: from.name });
      }

      if (isKeepAlive(to) && to.name !== "Login") {
        !this.include.includes(to.name) && this.include.push(to.name);
      }

      if (isKeepAlive(from) && isBack) {
        var index = this.include.indexOf(from.name);
        index !== -1 && this.include.splice(index, 1);
      }

      this.$router.isBack = false;
      this.$router.isReplace = false;

      console.log(this.transitionName, "change");
    }
  },
  mounted: function() {
    // this.setOpenShare();
  },
  methods: {
    // setOpenShare: function() {
    //   if (isWeixin()) {
    //     getShare().then(res => {
    //       var data = res.data.data;
    //       var configAppMessage = {
    //         desc: data.synopsis,
    //         title: data.title,
    //         link: location.href,
    //         imgUrl: data.img
    //       };
    //       openShareAll(configAppMessage);
    //     });
    //   }
    // }
  }
};
</script>
<style lang="scss">
[v-cloak] {
  display: none !important;
}

.router {
  position: absolute;
  width: 100%;
}

.fold-left-enter-active {
  animation-name: fold-left-in;
  animation-duration: 0.5s;
}

.fold-left-leave-active {
  animation-name: fold-left-out;
  animation-duration: 0.5s;
}

@keyframes fold-left-in {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  10% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fold-left-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  10% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.fold-right-enter-active {
  animation-name: fold-right-in;
  animation-duration: 0.5s;
}

.fold-right-leave-active {
  animation-name: fold-right-out;
  animation-duration: 0.5s;
}

@keyframes fold-right-in {
  0% {
    width: 100%;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  10% {
    width: 100%;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fold-right-out {
  0% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  10% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    width: 100%;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
</style>
