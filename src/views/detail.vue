<template>
  <div>
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 商品详情下的整个大身 -->
    <div id="big-body">
      <!-- 图片 -->
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        style="height: 350px"
      >
        <van-swipe-item v-for="(item, index) in data.banners" :key="item">
          <img :src="item" alt="" :id="index" style="width: 100%" />
        </van-swipe-item>
      </van-swipe>

      <!-- 所有信息 -->
      <div class="information">
        <div class="item-container">
          <div class="item-master">
            <span class="label1 f12 tac">直降</span>
            <span class="label2 f12 tac">包邮</span>
            <span>{{ data.masterName }}</span>
          </div>

          <div class="item-slave">
            <span>{{ data.slaveName }}</span>
          </div>

          <div class="item-price mt-10 flex jc-sb">
            <span>
              <span class="price-icon mr-5">￥</span>
              <span class="price mr-5">{{ data.minPrice|fMoney }}</span>
              <span class="price-del">￥{{ data.maxPrice|fMoney }}</span>
            </span>
            <span class="buynum">{{ data.inventory }}人购买</span>
          </div>

          <div class="item-cell">
            <div class="item-cellinformation flex jc-sb">
              <span class="f797">规格： X<span class="f323"> 2</span></span>

              <i class="iconfont icon-jiantou f797"></i>
            </div>
          </div>

          <div class="item-place flex jc-sb">
            <span class="f797"
              >至交货:
              <span class="f323 text"
                >上海黄区啥假机破案机侦破机侦破机侦破机侦破机构破案机</span
              ></span
            >
            <i class="iconfont icon-jiantou f797"></i>
          </div>

          <div class="item-baged">
            <i class="iconfont icon-queren"></i>
            <span class="f797">包邮</span>
          </div>
        </div>
      </div>

      <div class="productdetail mt-10 flex jc-c aic">—— 商品详情 ——</div>
    </div>

    <!-- 图片详情 -->
    <div class="images">
      <div id="img" v-for="item in data.banners" :key="item">
        <img :src="item" alt="" />
      </div>

      <div class="process mt-20 flex jc-c aic">—— 流程及须知 ——</div>
      <img
        src="https://file.sdyxmall.com/h5/v1/public/app/img/group5.b0b24d0.png"
        alt=""
      />
    </div>

    <!-- 底部文字 -->
    <div class="last-context">
      <p class="big-item">一、关于发货</p>
      <p class="small-item">
        个工作日内发出（周末、节假日需顺延）个工作日内（顺延、法定假日需顺延）；
      </p>
      <p class="big-item">二、关于发货</p>
      <p class="small-item">
        个工作日内发出（周末、节假日需顺延）个工作日内（顺延、法定假日需顺延）；
      </p>
      <p class="big-item">三、关于发货</p>
      <p class="small-item">
        个工作日内发出（周末、节假日需顺延）个工作日内（顺延、法定假日需顺延）；
      </p>
      <p class="big-item">四、关于发货</p>
      <p class="small-item">
        个工作日内发出（周末、节假日需顺延）个工作日内（顺延、法定假日需顺延）；
      </p>
    </div>
    <footer class="goods-action fixed flex jc-sb aic pl-10">
      <div class="flex">
        <div class="chat flex fdc aic">
          <i class="iconfont icon-chat f30"></i>
          <span class="chat-tex">客服</span>
        </div>
        <div class="chat flex fdc aic">
          <i class="iconfont icon-aixin f30"></i>
          <span class="chat-tex">收藏</span>
        </div>
        <div class="chat flex fdc aic rel">
          <span class="f10 abs txt" :class="dsn">{{ num }}</span>
          <router-link to="/buy">
            <span class="chat-tex">购物车</span>
          </router-link>
        </div>
      </div>

      <div class="flex">
        <button class="shop-btn" @click="addsth">
          <span>加入购物车</span>
        </button>
        <button class="buy-btn"><span>立即购买</span></button>
      </div>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
@import "./css/product.scss";
.txt {
  right: 0;
  top: 0;
  background-color: brown;
  color: aliceblue;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  text-align: center;
}
.dsn {
  display: none;
}
</style>
<script>
import { Toast } from 'vant';
import $axios from "../api/request";
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {
      data: {},
      num: 0,
      dsn: "dsn",
    };
  },
  components: {
    Footer,
  },
  // activated(){
  //   this.init();
  // },
  created() {
    let productId = this.$route.params.productId;
    console.log(productId);
    this.getDetails(productId);
  },
  methods: {
    // 编辑
    onClickLeft() {
      this.$router.go(-1);
    },
    // 详情页商品数据
    getDetails(productId) {
      $axios
        .get("/product/detail?productId=" + productId)
        .then((res) => {
          console.log(res);
          this.data = res.result;
          this.num = res.result.cartNum;
          if (this.num === 0) {
            this.dsn = "dsn";
          } else {
            this.dsn = "";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 加购
    addsth() {
      let productId = this.$route.params.productId;
      let params = {
        "productId" : productId
      }
      console.log(productId);
      $axios.post("/cart/add", params).then((res) => {
        console.log("success" + productId);
        this.num ++;
      }).catch((err)=>{
        
      });
    },
    // 获取购物车数量
    // getNum(){
    //   $axios.get('/cart/all').then((res)=>{
    //     this.num = res.
    //   })
    // }
  },
};
</script>