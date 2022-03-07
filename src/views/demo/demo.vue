<template>
<div class="f20">
  <p>{{username}}</p>
  <p>{{age}}</p>
  <button @click="click">点击</button>
  <button @click="getCode">获取验证码</button><br>
  <span>{{smsCode}} 11 </span>
  <p class="box">123</p>
</div>
  
</template>
<style lang="scss" scoped>
@import './demo.scss'
</style>
<script>
import {mapState} from 'vuex';
  export default{
    computed:{
      username(){
        return this.$store.state.username;
      },
      ...mapState(['smsCode','age']),

    },
    methods:{
      click(){
        this.$store.commit('setName',"lisi");
      },
      getCode(){
        this.$store.dispatch('SMS',13800000000)
      }
    }
  }
</script>

