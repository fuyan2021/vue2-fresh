<template>
  <div class="flex2 aic">
    <div class="search flex aic">
      <div class="van-search aic flex">
        🔍
        <input
          type="search"
          placeholder="请输入关键字"
          id="search"
          class="ml-10 van-field__control"
          ref="search"
          v-on:input="change"
          v-model="value"
          @keyup.enter="find(value)"
        />
      </div>
    </div>
    <div class="select">
      <div class="left">
        <a
          v-for="item2 in type"
          :key="item2"
          class="item flex2 jc-c aic type"
          @click="getFreshList(item2.categoryId)"
        >
          <span class="mt-10">{{ item2.name }}</span>
        </a>
      </div>
      <div class="right">
        <ul class="flex jc-sa fww pb-80" id="search-list">
          <li class="item-li" v-for="item in fresh" :key="item">
            <router-link
              :to="{ path: '/detail/' + item.productId }"
              active-class="on"
              class="item"
            >
              <img :src="item.imgUrl" alt="" class="img" />
              <p class="f12">{{ item.masterName }}</p>
            </router-link>
          </li>

          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
 <style lang="scss" scoped>
@import "./type.scss";
.item-li {
  list-style: none;
  width: 50%;
  height: 160px;
  margin-bottom: 0;
}
</style>
<script>
import Footer from "../../components/Footer.vue";
import $axios from "../../api/request";
export default {
  data() {
    return {
      type: [],
      fresh: [],
      value: ''
    };
  },
  components: {
    Footer,
  },
  created() {
    this.getTypeList();
    this.getFreshList();
  },
  methods: {
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
    getFreshList(categoryId) {
      let params = {
        categoryId: categoryId ? categoryId : "",
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
    change() {
      // var timer;
      // let keyword = this.$refs.search.value;
      // timer = setTimeout(function () {
      //   this.find(keyword);
      //   console.log(keyword);
      //   clearTimeout(timer);
      // }, 3000);
    },
    find(key) {
      let params = {
        "keyword":key
      }
      $axios.post('/product/search',params).then((res)=>{
          let array = res.list;
          this.fresh = array;
          console.log("成功")
      })
    },
  },
};
</script>