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
    <div class="photo">
      <img
        src="https://mall.s.maizuo.com/c8ae4728163788cda4147e1ed8c44409.png"
        alt="无法显示"
      />
    </div>

    <!-- 所有信息 -->
    <div class="information">
      <div class="item-container">
        <div class="item-master">
          <span class="label1 f12 tac">直降</span>
          <span class="label2 f12 tac">包邮</span>
          <span
            >【实腰建褤橙橙营养10斤装（95g-15g/3枚）】嫩嫩的花香之乡“嫩嫩多汁”</span
          >
        </div>

        <div class="item-slave">
          <span>果园生态种植皮薄香甜爽口天然维C</span>
        </div>

        <div class="item-price mt-10 flex jc-sb">
          <span>
            <span class="price-icon mr-5">￥</span>
            <span class="price mr-5">44.9</span>
            <span class="price-del">￥56.9</span>
          </span>
          <span class="buynum">3932人购买</span>
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
    <div id="img">
      <img
        src="https://mall.s.maizuo.com/3e4b70023588c364c07d57bd57a59f27.jpg"
        alt=""
      />
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

    <Footer></Footer>
  </div>
</template>
<style>
@import './css/product.scss';
</style>
<script>
import $axios from "../api/request";
import Footer from "../components/Footer.vue"
export default {
  data() {
    return {};
  },
  components:{
      Footer
  },
  created() {
    let productId = this.$route.params.productId;
    this.getDetails(productId);
  },
  methods: {
    onClickLeft() {},
    getDetails(productId) {
      $axios
        .get("/product/detail?productId=" + productId)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>