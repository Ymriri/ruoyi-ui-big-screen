<template>
  <div class="app-container">
    <div>
      <el-form :inline="true" :model="searchForm" class="search-form">
        <el-form-item label="用户名查询">
          <el-input v-model="searchForm.keyword" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">查询</el-button>
          <el-button @click="resetForm">重置</el-button>
          <el-button type="primary"  @click="searchException">异常查询</el-button>
        </el-form-item>
      </el-form>
<!--      如果出现异常显示红色-->
      <el-table :data="tableData" :row-class-name="tableRowClassName" v-loading="loading" style="width: 100%">
        <el-table-column prop="userName" label="姓名"></el-table-column>
        <el-table-column prop="xinguang" label="是否感染过新冠"></el-table-column>
        <el-table-column prop="xunma" label="是否有荨麻疹">
          <template scope="scope">
            <span v-if="scope.row.xunma=='是'" style="color:red">{{ scope.row.xunma }}</span>
            <span v-else >{{ scope.row.xunma }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="shuidou" label="是否感染过水痘">
          <template scope="scope">
            <span v-if="scope.row.shuidou=='是'" style="color:red">{{ scope.row.shuidou }}</span>
            <span v-else >{{ scope.row.shuidou }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="aids" label="是否有艾滋病">
          <template scope="scope">
            <span v-if="scope.row.aids=='是'" style="color:red">{{ scope.row.aids }}</span>
            <span v-else >{{ scope.row.aids }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="yigang" label="是否感染过乙肝">
          <template scope="scope">
            <span v-if="scope.row.yigang=='是'" style="color:red">{{ scope.row.yigang }}</span>
            <span v-else >{{ scope.row.yigang }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="other" label="是否有其他传染性疾病">
          <template scope="scope">
            <span v-if="scope.row.other=='是'" style="color:red">{{ scope.row.other }}</span>
            <span v-else >{{ scope.row.other }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {selectHealth } from "@/api/health/health";
import {listJob} from "@/api/monitor/job";
import da from "element-ui/src/locale/lang/da";

export default {
  name: "health",
  data() {
    return {
      loading: false, // 显示加载中
      searchForm: {
        keyword: ''
      },
      tableData: []
    }
  },
  methods: {
    /**
     * 普通查询
     */
    handleSearch() {
      this.loading = true;
      let that = this;
      // 假设接口返回数据需要 1s 时间
      let query = "userName="+this.searchForm.keyword+"&&exception=false";
      selectHealth(query).then(response => {
        this.loading = false;
        let data = response.data;
        data = that.dataClear(data);
        that.tableData= data;
      });
    },
    timestampToTime(timestamp) {
      timestamp = timestamp ? timestamp : null;
      let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
      let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      return Y + M + D;
    },
    resetForm() {
      this.searchForm.keyword = ''
    },
    /**
     *异常查询
     */
    searchException() {
      this.loading = true;
      let that = this;
      // 假设接口返回数据需要 1s 时间
      let query = "userName="+this.searchForm.keyword+"&&exception=true";
      selectHealth(query).then(response => {
        this.loading = false;
        let data = response.data;
        data = that.dataClear(data);
        that.tableData= data;
      });
    },
    /**
     * 数据处理
     * @param data
     * @returns {*}
     */
    dataClear(data){
      for(let i=0;i<data.length;i++){
        data[i].xunma=data[i].xunma?'是':'否';
        data[i].shuidou=data[i].shuidou?'是':'否';
        data[i].kuangquan=data[i].kuangquan?'是':'否';
        data[i].jishui=data[i].jishui?'是':'否';
        data[i].yigang=data[i].yigang?'是':'否';
        data[i].other=data[i].other?'是':'否';
        data[i].aids=data[i].aids?'是':'否';
        // data[i].createTime=data[i].xunma?'是':'否';
        data[i].xinguang=data[i].xinguang?'是':'否';
        data[i].createTime=this.timestampToTime(data[i].createTime);
      }
      return data;
    },
    /**
     * 红色标记
     * @param row
     * @param rowIndex
     * @returns {string}
     */
    tableRowClassName({row, rowIndex}) {
      console.log(row);
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return "success-row";
    }
  }
}
</script>
<style scoped>
.el-table .warning-row {
  background: oldlace;
}

.success-row {
  background: #f0f9eb;
}
</style>
