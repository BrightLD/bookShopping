<template>
  <ul>
    <!--router-link的默认样式为a标签，我们可以通过tag标签为其制定样式-->
    <router-link exact to="/" tag="li">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list" tag="li">
      <i class="iconfont icon-liebiaoyetuanqi"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect" tag="li">
      <i class="iconfont icon-shoucang"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/add" tag="li">
      <i class="iconfont icon-icon02"></i>
      <span>添加</span>
    </router-link>
  </ul>
</template>
<script>
  export default {
    data() {
      return {msg: 'hello'}
    },
    created() {
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
  ul {
    position: fixed;
    display: flex;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid gray;
    li {
      display: flex;
      flex: 1;
      justify-content: center;
      flex-direction: column;
      background: lightgray;
      /*指的是li中的同级元素，在这里指的是i标签和span以竖直方向为轴*/
      align-items: center;
      i {
        font-size: 23px;
      }
    }

  }

  .router-link-active {
    color: red;
    box-shadow: 1px 1px 1px 1px black;
  }

  /*router-link-exact-active router-link-active
  在 vue的内部是通过以上两个属性来控制li的样式，第一个属性为当前对应的那一项，我们通过exact可以联想出来，第二个属性我们可以通过他设置样式
  */
</style>
