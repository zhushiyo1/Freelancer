<template>
  <div id="footer" class="acea-row row-middle">
    <router-link
      :to="item.url"
      class="item"
      :class="{ on: item.url === $route.path }"
      v-for="(item, index) in footerList"
      :key="index"
    >
      <div
        class="iconfont"
        :class="item.url === $route.path ? item.icon2 : item.icon1"
      ></div>
      <div>{{ item.name }}</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Footer",
  props: {},
  data: function() {
    return {
      footerList: [
        {
          name: "Messages",
          icon1: "iconmessage",
          icon2: "iconmessagewhite",
          url: "/"
        },
        {
          name: "My Projects",
          icon1: "iconworkbench",
          icon2: "iconworkbench_fill",
          url: "/my_projects"
        },
        {
          name: "Post Project",
          icon1: "iconjia",
          icon2: "iconjia1",
          url: "/post_project"
        },
        {
          name: "Browse",
          icon1: "iconfangda",
          icon2: "iconfangda",
          url: "/browse"
        },
        {
          name: "Account",
          icon1: "iconpeople",
          icon2: "iconpeople_fill",
          url: "/account"
        }
      ]
    };
  },
  methods: {}
};
</script>
