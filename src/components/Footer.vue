<template>
    <footer>
    <router-link to="/home" active-class="on" class="item">首页</router-link>
    <router-link to="/type" active-class="on" class="item">分类</router-link>
    <router-link to="/buy" active-class="on" class="item">购物车</router-link>
    <router-link to="/my" active-class="on" class="item">我的</router-link>
  </footer>
</template>
<script>
export default {
    props:['msg1','msg2'], 
    created() {
        console.log(this.msg1); 
    }
}
</script>
<style>
body {
  background-color: ghostwhite;
}
footer {
  justify-content: space-around;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
}
footer .item {
  color: gray;
  text-decoration: none;
  font-size: 14px;
}
footer .on {
  color: red;
}
</style>