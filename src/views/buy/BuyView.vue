<template>
  <div class="flex2">
    <Nav></Nav>
    <div class="van-empty">
      <div class="empty-image pt-25">
        <img
          src="https://img01.yzcdn.cn/vant/empty-image-default.png
            "
          alt=""
          class="empty-image"
        />
      </div>
      <p class="description">去登录</p>
    </div>
    <!-- 列表 -->
    <div class="list-i">
      <div style="width: 30px; height: 100%"></div>
      <img
        src="https://mall.s.maizuo.com/86d8414272e50b4b9a7b185ac30dfc86.png?x-oss-process=image/resize,w_180"
        alt=""
      />
      <div class="flex2 jc-sb text-box w100">
        <span class="f14">标题</span>
        <div class="f12 flex jc-sb">
          <span>¥12</span>
          <span>x11</span>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
 <style>
.list-i {
  height: 100px;
  overflow: auto;
  box-sizing: border-box;
  display: flex;
}
.text-box {
  height: 100px;
}

.list-i img {
  width: 100px;
  height: 100px;
}
.van-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
  justify-content: flex-start;
}
.empty-image {
  width: 160px;
  height: 160px;
  background-image: url(https://img01.yzcdn.cn/vant/empty-image-default.png);
}
.description {
  margin-top: 16px;
  padding: 0 60px;
  color: #969799;
  font-size: 14px;
  line-height: 20px;
}
</style>
<script>
import Footer from "../../components/Footer.vue";
import Nav from "../../components/NavBar.vue";
import $axios from "../../api/request";
export default {
  data() {
    return {
        list:[]
    };
  },
  components: {
    Footer,
    Nav,
  },
  created(){
      this.getList();
  },
  methods: {
      getList(){
          $axios.get('/cart/all').then((res)=>{
              this.list = res.list;
              console.log(res)
          }).catch((err)=>{
              console.log("错误"+err);
          })
      },
  },
};
</script>