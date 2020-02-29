<template>
  <div class="browse-index" v-cloak>
    <Search
      v-model="keywords"
      clearable="true"
      placeholder="Browse freelancer and jobs"
    />
    <div class="reco">
      <div class="ym-title">Recommended jobs</div>
    </div>
  </div>
</template>
<script>
import { Search } from "vant";
export default {
  name: "Index",
  components: {
    Search
  },
  props: {},
  data: function() {
    return {
      keywords: ""
    };
  },
  mounted: function() {}
};
</script>
<style scoped>
.browse-index {
  background-color: #fff;
}
.browse-index .reco {
  width: 95%;
  height: 1rem;
  line-height: 1rem;
  padding: 0.1rem 0.2rem 0.4rem 0.2rem;
  /* position: fixed; */
  background-color: #fff;
  z-index: 1;
  font-size: 0.45rem;
}
.browse-index .reco .ym-title:before {
  position: absolute;
  height: 1px;
  content: "\A0";
  right: 0;
  top: 1rem;
  left: 0;
  background-color: #e6e6e6;
}
</style>
