<template>
  <div class="account-index" v-cloak>
    <div
      class="header acea-row row-between-wrapper"
      @click.stop="$router.push({ path: '/user/data' })"
    >
      <div class="picTxt acea-row row-between-wrapper">
        <div class="pictrue">
          <img
            src="https://qiniu.shulan95.com/d920524714b661bb66d2211df82e8627_1.jpg"
          />
        </div>
        <div class="text">
          <div class="acea-row row-middle">
            <div class="name line1">Zhusuxu</div>
          </div>
          <span @click.stop="bindPhone" class="binding">
            <span>绑定手机号</span>
          </span>
        </div>
      </div>
    </div>
    <div class="wrapList">
      <div class="item acea-row row-between-wrapper">
        <div class="text">
          <div class="avail-balance line1">Availance Balance</div>
          <div class="money">$259.25 USD</div>
          <div class="times">You have 6 out out of 8 bids remaining</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Index",
  components: {},
  props: {},
  data: function() {
    return {};
  },
  mounted: function() {},
  methods: {
    bindPhone: function() {
      this.$router.push({
        path: "/account/binding"
      });
    }
  }
};
</script>
<style scoped>
.account-index {
  background-color: #fff;
}
.account-index .header {
  padding: 0 0.3rem;
  height: 1.5rem;
  position: relative;
}
.account-index .header .picTxt .pictrue {
  width: 1.2rem;
  height: 1.2rem;
}
.account-index .header .picTxt .pictrue img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 0.03rem solid #f5f5f5;
}
.account-index .header .picTxt .text {
  width: 4.34rem;
  margin-left: 0.35rem;
  text-align: left;
}
.account-index .header .picTxt .text .name {
  font-size: 0.45rem;
  max-width: 2.6rem;
  width: unset;
}
.account-index .header .binding {
  padding: 0.05rem 0.15rem;
  height: 0.36rem;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 5px;
  border-radius: 0.3rem;
  color: #fff;
}
.account-index .header:after {
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
.account-index .wrapList .item {
  width: 92%;
  height: 2.5rem;
  border-radius: 0.2rem;
  margin-bottom: 0.22rem;
  padding: 0 0.3rem;
  margin: 0 0.3rem;
  position: relative;
  border: 0.02rem solid #dbd8d8;
  text-align: center;
}
.account-index .wrapList .text {
  width: 100%;
}
.account-index .wrapList .text .avail-balance {
  width: 100%;
  font-size: 0.3rem;
  color: #282828;
}
.account-index .wrapList .text .times {
  font-size: 0.24rem;
  color: rgb(53, 52, 52);
  margin-top: 0.1rem;
}
.account-index .wrapList .text .money {
  padding: 0.1rem;
  font-size: 0.45rem;
  font-weight: 700;
  border-bottom: 0.02rem solid #d4dde4;
}
</style>
