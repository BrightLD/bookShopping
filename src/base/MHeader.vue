<template>
  <div class="mHeader">
    <i class="iconfont icon-houtui" v-if="back"></i>
    <slot></slot>
    <!--slot标签非常重要，将使用组件MHeader夹杂着的内容放到slot中，才能在页面中显示-->
  </div>
</template>
<script>
  export default {
    props: {
      back: {
        type: Boolean,
        default: false
      }

    },
    data() {
      return {msg: {}}
    },
    created() {
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
  .mHeader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: lightgray;
    i {
      position: absolute;
      left: 20px;
      font-size: 20px;
    }
  }
</style>
