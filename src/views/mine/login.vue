<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar title="登录" left-text="返回" left-arrow @click-left="back" />

    <!-- 输入界面 -->
    <ul class="list bg-fff w100 mt-5" id="list">
      <li class="item flex jc-sb">
        
          <input
            id="phone"
            class="input f14"
            type="text"
            maxlength="11"
            placeholder="请输入手机号"
            autocomplete="off"
            v-model="num"
          />
        
        <p class="f12" id="getCode" @click="getCode">获取短信验证码</p>
      </li>

      <li class="item pt-20 flex">
        
          <input
            id="displayCode"
            class="input f14"
            type="text"
            placeholder="请输入验证码"
            :value="smsCode"
          />
      
      </li>

      <p id="login" class="btn flex jc-c aic" @click="toLogin">短信登录</p>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@import url(./login.scss);
</style>
<script>
import { mapState } from "vuex";
import $axios from "../../api/request";
export default {
  data() {
    return {
      num: "",
    };
  },
  computed: {
    smsCode() {
      return this.$store.state.smsCode;
    },

    phone() {
      return this.$store.state.phone;
    },
    ...mapState[("smsCode", "num")],
  },
  methods: {
    // 返回
    back() {
      this.$router.go(-1);
    },
    //存号码???还要做一个号码校验
    setPhone() {},
    //获取验证码
    getCode() {
      this.$store.dispatch("SMS", this.num);
    },
    //登录
    toLogin() {
      if (this.smsCode) {
        let params = {
          phone: this.num,
          smsCode: this.smsCode,
        };
        console.log(JSON.stringify(params))
        $axios.post("/user/login", params).then((res) => {
          if (res.code === 666) {
            this.$store.commit("setPhone", res.result.phone);
            this.$store.commit('setToken',res.result.token)
        
            this.$router.push("/my");
          }
        });
      }
    },
  },
};
</script>