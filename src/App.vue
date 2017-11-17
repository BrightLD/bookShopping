<!--模板-->
<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!--路由中的内容将在其router-view中显示-->
    <Tab></Tab><!--3使用-->
  </div>
</template>
<!--js-->
<script>
  import Tab from '../src/base/Tab.vue'
  //  组件的三部曲：1、导入
  export default {
    components: {Tab}
//        2、注册
  }
</script>
<!--css-->
<style>
  * {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .content {
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 51px;
    overflow-y: scroll;
  }

</style>
