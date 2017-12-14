<template>
  <ul>
    <!--router-link的默认样式为a标签，我们可以通过tag标签为其制定样式，在react中的默认样式也是为a，使用的是react-router-->
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
    li {
      display: flex;
      flex: 1;
      justify-content: center;
      flex-direction: column;
      background: whitesmoke;
      /*指的是li中的同级元素，在这里指的是i标签和span以竖直方向为轴*/
      align-items: center;
      i {
        font-size: 23px;
      }
    }
  }
  .router-link-active {
    color: orangered;
    /*box-shadow的6个属性的介绍：第一个为水平阴影的位置，第二个为垂直阴影的位置，第三个为阴影的模糊距离，第四个为阴影的尺寸，第五个为阴影的颜色，第6个为阴影向内扩散*/
  }
  /*router-link-exact-active router-link-active
  在 vue的内部是通过以上两个属性来控制li的样式，第一个属性为当前对应的那一项，我们通过exact可以联想出来，第二个属性我们可以通过他设置样式
  */
</style>
