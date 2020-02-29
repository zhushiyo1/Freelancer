<template>
  <div class="post-project-index" v-cloak>
    <div class="nav-con">
      <div class="ym-title">It's free to post a project!</div>
    </div>
    <div class="hinf">
      <router-link
        v-for="(item, index) in itemList"
        @click="tapAddress(index)"
        :key="index"
        :to="item.url"
        class="arr"
        ><div class="th-title">{{ item.title }}</div>
        <div class="th-detail">{{ item.detail }}</div></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Index",
  components: {},
  props: {},
  data: function() {
    return {
      itemList: [
        {
          title: "Website & IT",
          detail: "HTML,CSS,PHP,JQuery",
          url: "/myProjects/postItem"
        },
        {
          title: "Mobile",
          detail: "IOS Apps, Android, Mobile Web",
          url: "/myProjects/postItem"
        },
        {
          title: "Website & IT",
          detail: "HTML,CSS,PHP,JQuery",
          url: "/myProjects/postItem"
        },
        {
          title: "Mobile",
          detail: "IOS Apps, Android, Mobile Web",
          url: "/myProjects/postItem"
        },
        {
          title: "Website & IT",
          detail: "HTML,CSS,PHP,JQuery",
          url: "/myProjects/postItem"
        },
        {
          title: "Mobile",
          detail: "IOS Apps, Android, Mobile Web",
          url: "/myProjects/postItem"
        },
        {
          title: "Website & IT",
          detail: "HTML,CSS,PHP,JQuery",
          url: "/myProjects/postItem"
        },
        {
          title: "Mobile",
          detail: "IOS Apps, Android, Mobile Web",
          url: "/myProjects/postItem"
        },
        {
          title: "Website & IT",
          detail: "HTML,CSS,PHP,JQuery",
          url: "/myProjects/postItem"
        },
        {
          title: "Mobile",
          detail: "IOS Apps, Android, Mobile Web",
          url: "/myProjects/postItem"
        },
        {
          title: "Website & IT",
          detail: "HTML,CSS,PHP,JQuery",
          url: "/myProjects/postItem"
        },
        {
          title: "Mobile",
          detail: "IOS Apps, Android, Mobile Web",
          url: "/myProjects/postItem"
        },
        {
          title: "Website & IT",
          detail: "HTML,CSS,PHP,JQuery",
          url: "/myProjects/postItem"
        },
        {
          title: "Mobile",
          detail: "IOS Apps, Android, Mobile Web",
          url: "/myProjects/postItem"
        }
      ]
    };
  },
  mounted: function() {}
};
</script>
<style scoped>
.post-project-index {
  background-color: #fff;
}
.post-project-index .nav-con {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  padding: 0.1rem 0.2rem 0.4rem 0.2rem;
  position: fixed;
  background-color: #fff;
  z-index: 1;
}
.post-project-index .nav-con .ym-title:before {
  position: absolute;
  height: 1px;
  content: "\A0";
  right: 0;
  top: 1rem;
  left: 0.2rem;
  background-color: #e6e6e6;
}
.post-project-index .hinf {
  margin: 0.9rem 0.4rem 1.2rem 0.4rem;
}
.post-project-index .hinf .arr {
  position: relative;
  display: block;
  height: 1.5rem;
  /* line-height: 1.5rem; */
  color: #505050;
  padding: 0.2rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.post-project-index .hinf .arr::before {
  position: absolute;
  height: 1px;
  content: "\A0";
  right: 0.25rem;
  top: 1.4rem;
  left: 0;
  background-color: #e6e6e6;
}
.post-project-index .hinf .arr:after {
  content: "";
  position: absolute;
  width: 0.2rem;
  height: 0.3rem;
  top: 50%;
  right: 0.25rem;
  margin-top: -0.1rem;
  color: #1883d9;
  background: url(//qiniu.shulan95.com/arrow_gray.png) no-repeat;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -o-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
  background-size: 100% 100%;
}
.post-project-index .hinf .arr .th-title {
  font-size: 0.45rem;
}
.post-project-index .hinf .arr .th-detail {
  margin-top: 0.1rem;
  font-size: 0.2rem;
  color: #b4adad;
}
</style>
