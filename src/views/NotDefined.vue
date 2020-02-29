<template>
  <div class="not-defined">
    <!-- <img src="@assets/images/404.gif" /> -->

    <div class="btn" @click="$router.replace({ path: '/' })">
      返回首页
    </div>
  </div>
</template>

<script>
export default {
  name: "NotDefined"
};
</script>

<style scoped>
.not-defined {
  /* position: relative; */
  background: url("../assets/images/404.gif");
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.not-defined img {
  width: 100%;
  background-size: cover;
}

.content {
  padding: 0 1rem;
  text-align: center;
  color: #44405e;
  font-size: 15px;
}

.title {
  margin-bottom: 0.6rem;
  color: #302c48;
  font-size: 20px;
}

.btn {
  position: absolute;
  color: #fff;
  background-color: #1883d9;
  font-size: 16px;
  padding: 0.16rem;
  border-radius: 25px;
  text-align: center;
  width: 2.4rem;
  z-index: 1;
  bottom: 20%;
  left: 35%;
}
</style>
