import Vue from "vue";
import Router from "vue-router";
import module from "./module";
import Index from "@views/Messages/Index";
import NotDefined from "@views/NotDefined";
import $store from "../store";
import toLogin from "@libs/login";
import Loading from "@views/Loading";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Messages",
      meta: {
        title: "Messages",
        keepAlive: false,
        footer: true,
        backgroundColor: "#fff"
      },
      component: Index
    },
    {
      path: "/my_projects",
      name: "My projects",
      meta: {
        title: "My Projects",
        keepAlive: false,
        footer: true,
        backgroundColor: "#fff"
      },
      component: () => import("@views/myProjects/Index.vue")
    },
    {
      path: "/post_project",
      name: "Post Project",
      meta: {
        title: "Post Project",
        keepAlive: true,
        footer: true,
        backgroundColor: "#fff"
      },
      component: () => import("@views/postProject/Index.vue")
    },
    {
      path: "/browse",
      name: "Browse",
      meta: {
        title: "Browse",
        keepAlive: true,
        footer: true,
        backgroundColor: "#fff"
      },
      component: () => import("@views/browse/Index.vue")
    },
    {
      path: "/account",
      name: "Account",
      meta: {
        title: "Account",
        keepAlive: true,
        footer: true,
        backgroundColor: "#fff"
      },
      component: () => import("@views/account/Index.vue")
    },

    ...module,
    {
      path: "/auth/:url",
      name: "Loading",
      meta: {
        title: " 加载中",
        keepAlive: true
      },
      component: Loading
    },
    {
      path: "*",
      name: "NotDefined",
      meta: {
        title: "页面找不到",
        keepAlive: true,
        home: false,
        backgroundColor: "#F4F6FB"
      },
      component: NotDefined
    }
  ],
  scrollBehavior(to, from) {
    from.meta.scrollTop = window.scrollY;
    return { x: 0, y: to.meta.scrollTop || 0 };
  }
});

const { back, replace } = router;

router.back = function() {
  this.isBack = true;
  back.call(router);
};
router.replace = function(...args) {
  this.isReplace = true;
  replace.call(router, ...args);
};

router.beforeEach((to, form, next) => {
  const { title, backgroundColor, footer, home, auth } = to.meta;
  console.log(to.name, form.name);
  if (auth === true && !$store.state.app.token) {
    if (form.name === "Login") return;
    return toLogin(true, to.fullPath);
  }
  document.title = title || process.env.VUE_APP_NAME || "找事干";
  //判断是否显示底部导航
  footer === true ? $store.commit("SHOW_FOOTER") : $store.commit("HIDE_FOOTER");

  //控制悬浮按钮是否显示
  home === false ? $store.commit("HIDE_HOME") : $store.commit("SHOW_HOME");

  $store.commit("BACKGROUND_COLOR", backgroundColor || "#F5F5F5");

  if (auth) {
    $store.dispatch("USERINFO").then(() => {
      next();
    });
  } else next();
});

export default router;
