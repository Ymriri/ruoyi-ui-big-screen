<!--
 描述: 新闻无缝滚动
 作者: 吴甜
 日期: 2023-02-02
-->

<template>
  <div class="wrap-container sn-container">
    <div class="sn-content">
      <div class="sn-title">新闻无缝滚动</div>
      <div class="sn-body">
        <div class="wrap-container">

          <div class="table">
            <table border="0" cellpadding="0" cellspacing="0" class="table-header">
              <tbody>
                <tr>
                  <td width="60%">
                    <span>标 题</span>
                  </td>
                  <td width="20%">
                    <span>日 期</span>
                  </td>
                  <td width="20%">
                    <span>热 度</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <vue-seamless-scroll :data="listData" class="seamless-warp" :class-option="optionSetting">
              <table border="0" cellpadding="0" cellspacing="0" class="item">
                <tbody>
                  <tr v-for="(item, index) in listData" :key="index">
                    <td width="100%" class="title">
                      <span>{{ item.title }}</span>
                    </td>
                    <td width="20%">
                      <span>{{ item.date }}</span>
                    </td>
                    <td width="20%">
                      <span :class="{colorRed: item.hot > 4999, colorOrange: item.hot < 10}">{{ item.hot }}</span>
                    </td>
                  </tr>
                </tbody>
            </table>
            </vue-seamless-scroll>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: "seamless",
  components: {
    vueSeamlessScroll
  },
  data() {
    return {
     listData: [{
        title: '钱花哪了?一图带你读懂年轻人的消费观',
        date: '2023-01-05',
        hot: 2306
     }, {
        title: '“春节”假期国内旅游收入超350亿元',
        date: '2023-02-02',
        hot: 5689
     }, {
        title: '极端天气气候事件多发，如何应对？',
        date: '2023-02-05',
        hot: 9
     }, {
        title: '“遇难人数已逾11000人：土总统抵震中地区，叙称物资受西方制裁影响难送达',
        date: '2023-02-05',
        hot: 288
     }, {
        title: '乐观还是悲观？巴菲特是个现实主义者！',
        date: '2023-02-07',
        hot: 158
     }, {
        title: 'B站的后浪，会把爱优腾拍在沙滩上吗?',
        date: '2023-02-08',
        hot: 889
     }, {
        title: '机票价格大涨？航司不能投放低价票？民航局：没向航司提过这样的要求',
        date: '2023-02-09',
        hot: 5800
     }, {
        title: '新冠病毒去哪了？会消失吗？专家：不太可能像SARS那样完全消失',
        date: '2023-02-10',
        hot: 6
     }, {
        title: '俄罗斯要求美驻俄大使馆停止传播俄在乌军事行动虚假消息',
        date: '2023-02-11',
        hot: 88
     }, {
        title: '夜读｜把人生的方向盘握在自己手里',
        date: '2023-02-12',
        hot: 88
     }, {
        title: '俄媒：克里姆林宫下令升级维修苏联时期防空洞',
        date: '2023-02-13',
        hot: 5
     }, {
        title: '国家新闻出版署启动实施2023年度出版智库高质量建设计划',
        date: '2023-02-14',
        hot: 258
     }, {
        title: '聚焦大湾区丨横琴粤澳深度合作区首部综合性法规出台',
        date: '2023-02-14',
        hot: 198
     }, {
        title: '喜讯 | 湘江实验室主任陈晓红院士及刘合院士团队的论文分获《中国科学院院刊》、《管理世界》年度优秀论文',
        date: '2023-02-15',
        hot: 19
     }]
    }
  },
  computed: {
　　optionSetting () {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // autoPlay: false,
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  mounted() {

  },
  methods: {

  },
  beforeDestroy() {

  }
};
</script>

<style lang="scss" scoped>
.sn-container {
  left: 1370px;
  top: 110px;
  %table-style {
    width: 100%;
    height: 35px;
    table-layout: fixed;
    tr {
      td {
        padding: 10px 5px;
        text-align: center;
        background-color: transparent;
        white-space: nowrap;
        overflow: hidden;
        color: #E2E5FF;
        font-size: 14px;
      }
    }
  }
  .table {
    .table-header {
      @extend %table-style;
    }
    .seamless-warp {
      height: 400px;
      overflow: hidden;
      visibility: visible;
      .colorRed {
        color: #FF4669;
      }
      .colorOrange {
        color: #FFC956;
      }
      .item {
        height: auto;
        @extend %table-style;
        tr {
          td {
            &.title {
              text-overflow: ellipsis;
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>
