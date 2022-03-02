<template>
  <van-nav-bar
    title="商品详情"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  
</template>
<script>
import $axios from "../api/request";

export default {
  data() {
    return {
     
    };
  },
  created() {
    let productId = this.$route.params.productId;
    this.getDetails(productId);
  },
  methods: {
    onClickLeft() {},
    getDetails(productId) {
      $axios.get("/product/detail?productId="+productId).then((res) => {
        console.log(res);

      }).catch((err)=>{
          console.log(err)
      })
    },
  },
};
</script>