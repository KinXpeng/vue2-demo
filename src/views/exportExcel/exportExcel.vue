<template>
  <div class="table-container">
    <div class="table-btn">
      <el-button type="primary" size="mini" @click="exportExcel('测试名称', 'export-table')">导出</el-button>
    </div>
    <el-table id="export-table" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="200">
        <!-- <template slot-scope="scope">
          <el-input v-model="scope.row.date"></el-input>
        </template> -->
      </el-table-column>
      <el-table-column label="配送信息">
        <el-table-column prop="name" label="姓名" width="150">
        </el-table-column>
        <el-table-column label="地址">
          <el-table-column prop="province" label="省份" width="150">
          </el-table-column>
          <el-table-column prop="city" label="市区" width="150">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="400">
          </el-table-column>
          <el-table-column prop="zip" label="邮编" width="150">
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import FileSaver from 'file-saver'
import * as XLSX from 'xlsx'
export default {
  data() {
    return {
      // 表格数据
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    exportExcel(name, id) {
      try {
        // const $e = this.$refs['export-table'].$el
        const $e = document.getElementById(id)
        let $table = $e.querySelector('.el-table__fixed')
        if (!$table) {
          $table = $e
        }

        const wb = XLSX.utils.table_to_book($table, { raw: true })
        const wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
        FileSaver.saveAs(
          new Blob([wbout], { type: 'application/octet-stream' }),
          `${name}.xlsx`,
        )
      } catch (e) {
        if (typeof console !== 'undefined') console.error(e)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.table-container {
  width: 80vw;
  margin: 10px auto;

  .table-btn {
    margin: 10px 0;
    text-align: right;
  }
}
</style>


