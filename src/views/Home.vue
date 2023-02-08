<!--
 描述: 酷屏首页模板
 作者: 吴甜
 日期: 2023-02-02
-->

<template>
  <div class="home-container">
  	<div class="wrap" ref="editor">
      <div class="top"></div>

      <sinan />
      <seamless />
      <pyramid />
<!--      这里直接使用滚动留言-->
      <scrollArc />
      <staffMix />
      <circleNesting />

    </div>

  </div>
</template>

<script>
import { screenSize } from '@/assets/js/utils'
import sinan from "@/views/components/sinan";

export default {
  name: 'Home',
  components: {

  },
  data() {
  	return {

  	}
  },
  computed: {

  },
  created() {
  },
  mounted() {
    screenSize(this.$refs.editor);
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.home-container {
	position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .wrap {
    transform-origin: 0px 0px 0px;
    background: url(../assets/img/bj.jpg) no-repeat;
    background-size: contain;
    background-position: 50% 0;
    background-color: rgb(0, 0, 0);
    min-width: auto;
    width: 1920px;
    min-height: auto;
    height: 1080px;
    overflow: auto;
    .top {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 80px;
      background-color: transparent;
      background: url(../assets/img/top_nav.png) no-repeat;
      background-position: 65% 0;
      border: none;
      overflow: hidden;
    }
    .divider {
      position: absolute;
      left: 50px;
      top: 3253px;
      width: 90%;
      height: 50px;
      width: 300px;
      border: none;
      background: transparent;
    }

  }
}
</style>
