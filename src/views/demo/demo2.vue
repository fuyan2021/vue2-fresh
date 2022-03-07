<template>
  <div>
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <van-checkbox v-for="(item, index) in list" :key="index" :name="item"
        >复选框 a</van-checkbox
      >
    </van-checkbox-group>
    <van-checkbox :value="checked" @click="selectAll">全选</van-checkbox>

    <p>{{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      list: ["a", "b", "c"],
      result: [],
    };
  },

  watch: {
    // 监听result,它的长度和list的长度相等时就是全选
    result(newValue, oldValue) {
      if (newValue.length === this.list.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
  },

  methods: {
    selectAll() {
      this.checked = !this.checked;
      this.$refs.checkboxGroup.toggleAll(this.checked);
    },
  },
};
</script> 