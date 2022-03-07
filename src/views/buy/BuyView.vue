<template>
  <div class="flex2">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      :right-text="edit"
      left-arrow
      @click-left="back"
      @click-right="onClickRight"
    />
    <!-- 空界面 -->
    <div>
      <div  class="van-empty" v-show="!list">
        <div class="empty-image pt-25">
          <img
            src="https://img01.yzcdn.cn/vant/empty-image-default.png
            "
            alt=""
            class="empty-image"
          />
        </div>
        <router-link
          :to="isLogin ? { path: $route.fullPath } : { path: '/login' }"
          class="description"
          >{{ isLogin ? "空空如也" : "去登录" }}</router-link
        >
      </div>
    </div>

    <!-- 列表 -->
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <div
        class="list-i L bg-fff pt-10 pb-10 pr-10 flex w100 h100 aic"
        v-for="(item, index) in list"
        :key="item"
      >
        <!-- 选择器 -->

        <div class="ml-10 mr-10">
          <van-checkbox :name="item" @click="toNum(index)"></van-checkbox>
        </div>

        <!-- item -->
        <img :src="item.imgUrl" alt="" style="background-color: #f5f5f5" />
        <div class="flex2 jc-sb text-box w100">
          <span class="f16" style="font-weight: bold">{{
            item.masterName
          }}</span>
          <div class="f14 flex jc-sb">
            <span style="color: brown">¥{{ item.price | fMoney }}</span>
            <span :class="price" style="color: gray">x{{ item.buyNum }}</span>
            <van-stepper
              :value="value"
              async-change
              @change="onChange"
              :class="step"
            />
          </div>
        </div>
      </div>
    </van-checkbox-group>
    <!-- 结算 -->
    <div class="commit">
      <van-submit-bar :price="sum" :button-text="jiesuan" @submit="onSubmit">
        <van-checkbox :value="checked" @click="selectAll">{{
          select
        }}</van-checkbox>
      </van-submit-bar>
    </div>

    <Footer></Footer>
  </div>
</template>
 <style lang="scss" scoped>
.price {
  text-align: end;
}
.van-submit-bar {
  bottom: 60px;
  border-bottom: 1px solid #f5f5f5;
}
.dsn {
  display: none;
}
.list-i {
  position: relative;
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid #f5f5f5;
}
.text-box {
  height: 100px;
  width: 100%;
  margin-left: 10px;
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
      list: [],
      jiesuan: "结算",
      edit: "编辑",
      empty: "", //判断界面显示
      step: "dsn", //
      L: "dsn",
      isEdit: true,
      price: "", //样式控制显隐
      checked: false,
      result: [],
      select: "全选",
      value: "", //步进器
      sum: 0, //总价
      isLogin: false, //是否已登录
    };
  },
  components: {
    Footer,
    Nav,
  },
  created() {
    this.getList();
  },
  watch: {
    // 监听result,它的长度和list的长度相等时就是全选
    result(newValue, oldValue) {
      console.log("点击了单选");
      // 计算单个价格

      if (newValue.length === this.list.length) {
        this.checked = true;
        console.log(this.checked);
      } else {
        this.checked = false;
        console.log(this.checked);
      }
    },
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    // 列表数据
    getList() {
      $axios
        .get("/cart/all")
        .then((res) => {
          this.list = res.list;
          console.log(res);
          if (res.list.length === 0) {
            this.empty = "dsn";
          } else {
            this.empty = "";
          }
          this.L = "";
        })
        .catch((err) => {
          console.log("错误" + err);
        });
    },
    // 编辑/删除
    onClickRight() {
      if (this.isEdit) {
        this.step = "";
        this.jiesuan = "删除";
        this.edit = "完成"
        this.isEdit = true;
        this.price = "dsn";
      } else {
        this.step = "dsn";
        this.jiesuan = "结算";
        this.isEdit = false;
        this.price = "";
      }
    },
    // 全选
    selectAll() {
      this.checked = !this.checked;
      this.$refs.checkboxGroup.toggleAll(this.checked);
    },
    // 步进器
    onChange() {},
    // 结算
    onSubmit() {
      if (this.isEdit) {
        
      }
    },
    // 计算价格
    toNum(index) {
      
      let itemN = this.result[index].buyNum; //每一个数量
      let itemP = this.result[index].price; //单价
      this.sum += itemN * itemP;
    },
    // 显示哪个界面
    checkPage() {
      // 如果已登录
      if (this.$store.state.token) {
        if (this.list.length === 0) {
          this.empty = "dsn";
        } else {
          this.empty = "";
        }
      }
    },
  },
};
</script>