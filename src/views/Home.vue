<!--
 描述: 酷屏首页模板
 作者: Jack Chen
 日期: 2020-04-29
-->

<template>
  <div class="home-container">
  	<div class="wrap" ref="editor">
      <div class="top"></div>

      <sinan />
      <seamless />
      <pyramid />

      <scrollArc />
      <szBar />

      <ringPin />
      <rotateColorful />
      <circleRunway />
      <scanRadius />

      <cakeLinkage />
      <pyramidTrend />
      <dynamicLine />

      <staffMix />
      <flashCloud />
      <ringPie />
      <colorfulRadar />

      <dynamicList />
      <bar3d />
      <colorfulArea />

      <rainbow />
      <gauge />
      <waterPolo />
      <circleNesting />

      <div class="divider"></div>

    </div>

  </div>
</template>

<script>
import { screenSize } from '@/assets/js/utils'
import sinan from "@/views/components/sinan";

export default {
  name: 'Home',
  components: {
    // sinan:()=> import("@/views/components/sinan/index"),
    // seamless:()=> import("@/views/components/seamless/index"),
    // pyramid:()=> import("@/views/components/pyramid/index"),
    // scrollArc:()=> import("@/views/components/scrollArc/index"),
    // szBar:()=> import("@/views/components/szBar/index"),
    // ringPin:()=> import("@/views/components/ringPin/index"),
    // rotateColorful:()=> import("@/views/components/rotateColorful/index"),
    // circleRunway:()=> import("@/views/components/circleRunway/index"),
    // scanRadius:()=> import("@/views/components/scanRadius/index"),
    // cakeLinkage:()=> import("@/views/components/cakeLinkage/index"),
    // pyramidTrend:()=> import("@/views/components/pyramidTrend/index"),
    // dynamicLine:()=> import("@/views/components/dynamicLine/index"),
    // staffMix:()=> import("@/views/components/staffMix/index"),
    // flashCloud:()=> import("@/views/components/flashCloud/index"),
    // ringPie:()=> import("@/views/components/ringPie/index"),
    // colorfulRadar:()=> import("@/views/components/colorfulRadar/index"),
    // dynamicList:()=> import("@/views/components/dynamicList/index"),
    // bar3d:()=> import("@/views/components/bar3d/index"),
    // colorfulArea:()=> import("@/views/components/colorfulArea/index"),
    // rainbow:()=> import("@/views/components/rainbow/index"),
    // gauge:()=> import("@/views/components/gauge/index"),
    // waterPolo:()=> import("@/views/components/waterPolo/index"),
    // circleNesting:()=> import("@/views/components/circleNesting/index"),

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
