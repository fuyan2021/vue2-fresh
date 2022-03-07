<template>
  <div>
    <!-- 导航顶部 -->
    <header class="head rel">
      <!-- <div class="photo"></div> -->

      <router-link
        id="login"
        :to="isLogin ? { path: '/login' } : { path: $route.fullPath }"
        class="text fff abs f16"
        >{{ L }}</router-link
      >
    </header>

    <!-- 选择列表 -->
    <nav>
      <ul class="list bg-fff mt-10 pl-20 pr-20">
        <li class="item f14 w100">
          <div class="small flex jc-sb aic">
            <p class="text">我的订单</p>
           
          </div>
        </li>

        <li class="item f14 w100">
          <div class="small flex jc-sb aic">
            <p class="text">收藏</p>
           
          </div>
        </li>

        <li class="item f14 w100">
          <div class="small flex jc-sb aic">
            <p class="text">足迹</p>
           
          </div>
        </li>

        <li class="item f14 w100">
          <div class="small flex jc-sb aic">
            <p class="text">优惠券</p>
           
          </div>
        </li>

        <li class="item f14 w100">
          <div class="small flex jc-sb aic">
            <p class="text">我的地址</p>
           
          </div>
        </li>

        <li class="item f14 w100">
          <div class="small flex jc-sb aic">
            <p class="text">地址</p>
           
          </div>
        </li>
        <li class="item f14 w100">
          <div class="small flex jc-sb aic">
            <p class="text" @click="logout">退出登录</p>
           
          </div>
        </li>
      </ul>
    </nav>
    <Footer></Footer>
  </div>
</template>
<style lang="scss" scoped>
@import "./my.scss";
</style>
<script>
import Footer from '../../components/Footer.vue'
import $axios from '../../api/request'
export default {
  components:{
    Footer,
  },
  data() {
    return {
      isLogin: false,
      L: ''
    };
  },
 
  computed: {
    
  },
   created() {
    this.login();
  },
  methods: {
    // 判断是否登录
    login() {
      this.L = this.$store.state.phone;
      let txt = this.$store.state.phone;
      console.log(txt)
      if (!txt) {
        this.L = "立即登录";
        this.isLogin = true;
      } else {
        this.isLogin = false;
        this.L = this.$store.state.phone;
      }
      console.log(this.isLogin);
    },
    logout(){
      $axios.get('/user/logout').then((res)=>{
        
        this.isLogin = true;
        this.L = '立即登录'
        
      })
    }
  },
};
</script>