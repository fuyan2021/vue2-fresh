<template>
  <van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
  
/>
</template>
<style>
.van-nav-bar__text, .van-icon, .van-nav-bar__left{
    color: red;
}

</style>
<script>
export default {
  props: [],
  data(){
    return{
      
    }
  },
  created: {},
  methods: {
    onClickLeft() {},
    onClickRight() {},
  },
};
</script>