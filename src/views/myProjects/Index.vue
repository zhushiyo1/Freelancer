<template>
  <div class="my-projects-index" v-cloak>
    <div class="nav-con"><span>Explore your projects here</span></div>
    <div>
      <Tabs v-model="active" sticky animated type="card" color="#1883d9">
        <Tab title="Work In Progress">
          <div class="working-content">
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>

            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>

            <div>Work In Progress</div>
            <div>Work In Progress</div>
            <div>Work In Progress</div>
          </div>
        </Tab>
        <Tab title="Past projects"
          ><div class="past-projects"><div>Past projects</div></div></Tab
        >
      </Tabs>
    </div>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
export default {
  name: "Index",
  components: {
    Tab,
    Tabs
  },
  props: {},
  data: function() {
    return {};
  },
  mounted: function() {}
};
</script>
<style scoped>
.index {
  background-color: #fff;
}
.my-projects-index .nav-con {
  margin: 0.2rem;
}
.my-projects-index .van-tabs {
  margin-top: 0.3rem;
}
.my-projects-index .working-content,
.past-projects {
  margin: 5px 16px 60px 16px;
}
</style>
