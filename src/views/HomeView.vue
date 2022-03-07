<template>
  <div>
    <!-- vant 轮播图 -->
    <div class="index-list">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        style="height: 280px"
      >
        <van-swipe-item v-for="(item1, index) in banners" :key="item1">
          <img
            :src="item1"
            alt=""
            :id="index"
            style="width: 100%; height: 100%"
          />
        </van-swipe-item>
      </van-swipe>
      <!-- 分类 -->
      <div class="flex jc-sa aic recomd pb-60">
        <p
          class="item flex2 jc-c aic"
          v-for="item2 in type"
          :key="item2"
          @click="getFreshList(item2.categoryId)"
        >
          <img :src="item2.iconUrl" alt="" />
          <span class="mt-10">{{ item2.name }}</span>
        </p>
      </div>
      <!-- 秒杀 -->
      <div class="flex jc-sa aic pintuan" style="height: 115px">
        <a href="" class="l pl-10 rel">
          <span class="abs title">秒杀</span>
          <div class="flex jc-sa aic h100pc">
            <div>
              <p class="f14">秒杀</p>
              <p class="f999 f10 mt-5">超值惊喜</p>
              <p class="kanjia mt-5 f12">立即砍价</p>
            </div>
            <img
              src="http://fresh.huruqing.cn/img/miaosha-icon.e7d1fb11.png"
              alt=""
              style="width: 70px"
            />
          </div>
        </a>
        <a href="" class="l pl-10 rel">
          <span class="abs title">拼团</span>
          <div class="flex jc-sa aic h100pc">
            <div>
              <p class="f14">拼团</p>
              <p class="f999 f10 mt-5">限时拼团</p>
              <p class="kanjia mt-5 f12">一键拼团</p>
            </div>
            <img
              src="http://fresh.huruqing.cn/img/pintuan-icon.711363b5.png"
              alt=""
              style="width: 70px"
            />
          </div>
        </a>
      </div>
      <div>
        <a href="" class="flex coupon jc-sb aic f14 ml-10 mr-10">
          <p class="l flex aic">
            <i></i>
            <span class="ml-5 fff">超值福利</span>
            <span class="ml-5 fff mr-5">|</span>
            <span class="fff">全场满减</span>
          </p>
          <p class="r flex aic pr-10">
            <span class="mr-5 fff">立即领取</span>
          </p>
        </a>
      </div>
      <div>
        <div class="sticky mt-5" style="display: block">
          <ul class="navagater">
            <li>推荐</li>
            <li>销量</li>
            <li>价格</li>
          </ul>
        </div>
      </div>
      <!-- 生鲜列表 -->
      <div
        class="product-list fww flex jc-sa pb-5"
        style="padding-bottom: 60px"
      >
        <li class="item-li" v-for="item in fresh" :key="item">
          <router-link
            :to="{ path: '/detail/' + item.productId }"
            active-class="on"
            class="item"
          >
            <img :src="item.imgUrl" alt="" class="img-li" />
            <div class="flex2 lh15 mt-10">
              <p class="f14 lh15">{{ item.masterName }}</p>
              <p class="f12 lh15">{{ item.categoryName }}</p>
            </div>
            <div class="flex lh15 jc-sb aic">
              <p>
                <span class="red f16">¥{{ item.minPrice }}</span>
              </p>
              <p>
                <span class="f10 f999">销量</span>
                <span class="f10 f999 pr-5">{{ item.inventory }}</span>
              </p>
            </div>
          </router-link>
        </li>

        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style lang="scss" scoped>
@import "./css/home.scss";
@import "./css/common.scss";
.item-li {
  list-style: none;
  width: 165px;
  height: 255px;
  margin-bottom: 0;
}
</style>
<script>
import Footer from "../components/Footer.vue";
import $axios from "../api/request";

export default {
  data() {
    return {
      banners: [], //轮播图
      type: [], //分类列表
      categoryId: 145, //默认时令鲜果
      currPage: 1, //默认第一页
      fresh: [],
    };
  },
  components: {
    Footer,
  },
  created() {
    this.getSwipList();
    this.getTypeList();
    this.getFreshList();
  },
 
  methods: {
    // 轮播图
    getSwipList() {
      $axios
        .get("/product/getBanners")
        .then((res) => {
          this.banners = res.banners;
          console.log("success" + this.banners);
        })
        .catch((err) => {
          console.log("err");
        });
    },
    // 分类
    getTypeList() {
      $axios
        .get("/category/all")
        .then((res) => {
          this.type = res.list;
        })
        .catch((err) => {
          console.log("错误");
        });
    },
    // 生鲜列表
    getFreshList(categoryId) {
      let params = {
        categoryId: categoryId ? categoryId : '',
        
      };
      $axios
        .post("/product/list", params)
        .then((res) => {
          this.fresh = res.list;
        })
        .catch((err) => {
          console.log("err");
        });
    },
    //触底事件
    
  },
};
</script>
