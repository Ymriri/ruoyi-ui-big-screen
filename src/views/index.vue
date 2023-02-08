<template>

  <div class="app-container">
    <div style="display: flex;flex-direction: column;">
      <div>
        <el-carousel :interval="4000" type="card">
          <el-carousel-item v-for="item in imgs" :key="item.id">
            <img :src="item.img" class="image" style="height: auto; width:100%;">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="display: flex;flex-direction: column;">
        <h1 class="bigHeader">专注智慧物业19年</h1>
        <div style="display: flex;margin: auto;margin-top: 3%;">
          自2004年，杭州新视窗一直专注于智慧物业，通过为物业企业提供智慧物业解决方案，助力物业企业数字化转型。
        </div>
      </div>
      <div class="company">
        <div style="display:flex;flex-direction: column;margin-top: 10%">
          <div style="display: flex;flex-direction: row;justify-content: space-between; align-items: center;">
            <div v-for="item in customers.one" style="display:flex;margin: auto;">
                <div class="company-header" style="text-align: center">
                  {{ item.nums }}
                </div>
              </div>
            </div>
        </div>
        <div style="display: flex;flex-direction: row;justify-content: space-between; align-items: center;margin-top: 3%">
          <div v-for="item in customers.one"
               style="display:flex;margin: auto;">
            <div style="display: flex;flex-direction: row;">
              <div style="text-align: center; display: block;">
                  {{ item.itemName }}
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex;flex-direction: row;justify-content: space-between; align-items: center;margin-top: 2%">
            <div v-for="item in customers.one" style="display:flex;margin: auto;width: 20%;">
              <div style="display: flex;flex-direction: row;">
                <div style="text-align: center; display: block;">
                  <div>
                    {{ item.text }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div style="display:flex;flex-direction: column;margin-top: 10%">
          <div style="display: flex;flex-direction: row;justify-content: space-between; align-items: center;">
            <div v-for="item in customers.two" style="display:flex;margin: auto;">
              <div class="company-header" style="text-align: center">
                {{ item.nums }}
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex;flex-direction: row;justify-content: space-between; align-items: center;margin-top: 3%">
          <div v-for="item in customers.two"
               style="display:flex;margin: auto;">
            <div style="display: flex;flex-direction: row;">
              <div style="text-align: center; display: block;">
                {{ item.itemName }}
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex;flex-direction: row;justify-content: space-between; align-items: center;margin-top: 2%">
          <div v-for="item in customers.two" style="display:flex;margin: auto;width: 20%;">
            <div style="display: flex;flex-direction: row;">
              <div style="text-align: center; display: block;">
                <div>
                  {{ item.text }}
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      // 除了bing以外其他都是随机API，质量不能保证..
      imgs: [
        {id: 1, img: "https://www.dmoe.cc/random.php"},
        {id: 2, img: "https://api.mtyqx.cn/tapi/random.php"},
        {id: 3, img: "https://api.dujin.org/bing/1920.php"},
        {id: 4, img: "https://api.ixiaowai.cn/api/api.php"}
      ],
      customers: {

        one: [
          {
            nums: "22家",
            itemName: "上市公司",
            text: "南都、绿城、雅生活、中奥、永升、滨江、新城悦、正荣、融创、恒大、佳源、金科、新希望服务、朗诗、中骏商管、方圆、融信服务、宝龙商业………"
          },
          {
            nums: "99家",
            itemName: "历届二百强物业",
            text: "中国物业服务历届二百强企业\n" +
              "其中99家选择使用智慧系统"
          },
          {
            nums: "300+",
            itemName: "一级资质",
            text: "合作一级资质物业用户累计超过300家"
          },
        ],
        two:
          [
            {
              nums: "15000+",
              itemName: "项目应用",
              text: "智慧管理系统被成功运用在15000个以上的物业信息化项目上"
            },
            {
              nums: "2000万+",
              itemName: "服务业主",
              text: "为超过2000w的业主提供生活服务"
            },
            {
              nums: "70万+",
              itemName: "员工",
              text: "超过70万物业员工正在使用智慧物管系统移动端解决物业管理、服务问题"
            },
          ]
      }
    };
  },
  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
.index {
  background: #c8cfd8;
  text-align: center;
  margin-left: 142px;
}


.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

// 首页部分
.header {
  display: flex;
  margin: auto;
  flex-direction: column;
}

.company {
  display: flex;
  flex-direction: column;
  //margin: auto;
}

.bigHeader {
  display: flex;
  margin: auto;
  margin-top: 5%;
  font-size: 40px;
  color: lightskyblue;
}

.company-header {
  margin: auto;
  margin-top: 5%;
  font-size: 30px;
  color: lightskyblue;
}

body {
  overflow-y: scroll;
}
</style>

