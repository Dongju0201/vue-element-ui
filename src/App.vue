<template>



  <div id="app">
<div>aaaaaaaaaaaaaa</div>
<el-container style="border: 1px solid #eee">
  <el-aside width="200px" >
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>


          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>


          <el-menu-item index="1-3">选项3</el-menu-item>

        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>


          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>


          <el-menu-item index="2-3">选项3</el-menu-item>

        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>


          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>


          <el-menu-item index="3-3">选项3</el-menu-item>

        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
    <el-input v-model="queryInfo.query"  style="width:200px" placeholder="请输入内容" clearable>   <el-button slot="append" icon="el-icon-search">搜索</el-button></el-input>
  
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
       <el-table
        height="500"
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
    type="index"
      >
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button  type="text" size="small">编辑</el-button> -->
        <el-tooltip el-tooltip class="item" effect="dark" content="修改操作" placement="top">
      <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
      </el-tooltip>
      <el-tooltip el-tooltip class="item" effect="dark" content="删除操作" placement="top">
<el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
 </el-tooltip>
<el-tooltip el-tooltip class="item" effect="dark" content="分享权限" placement="top" :enterable="false">
     <el-button type="warning" size="mini" icon="el-icon-setting"></el-button>
    </el-tooltip>




      </template>
    </el-table-column>
  </el-table>
<!-- 分页 -->
 <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pageNum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="queryInfo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>

    </el-main>
  </el-container>
</el-container>

  </div>
</template>

<script>
export default {
  name: 'App',
data(){
return{
  // 输入框
  input: '',
  // top导航栏
  activeIndex: '1',
  activeIndex2: '1',
  menuList:[],
  ratings:"",

  // 获取用户列表的数据

  queryInfo:{
   
   query:"",
   // 当前的页数
   pageNum:1,
   // 每页显示多少条
   pageSize:8
  },


  // mock的全部人数据
  tableData: [{
          date: '2016-05-02',
          name: '王王',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '小小',
          province: '北京',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '大大',
          province: '广州',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '依依',
          province: '长沙',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '卡卡',
          province: '吉林',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '思思',
          province: '长春',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '麻麻',
          province: '沈阳',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '六六',
          province: '黑龙江',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '贱贱',
          province: '大连',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '堂堂',
          province: '丹东',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '嘻嘻',
          province: '陕西',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '哈哈',
          province: '山东',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
}
},
computed: {
  // count(){
  //   return this.$store.state.count
  // },
  // // firstName(){
  // //    return this.$store.state.firstName
  // // },
  // //  lastName(){
  // //    return this.$store.state.lastName
  // // },
  // fullName(){
  //   return this.$store.getters.fullName
  // },
  // panD(){
  //   return this.$store.getters.panD
  // }
},

// created(){
//   this.getList()
// },
methods: {

    //   // 请求获取数据
    //   async getList(){
    //   await this.$http.get('ratings').then(res => {
    //    let menuList = res.data
    //  }).catch(err=>{
    //    console.log(err+"错误原因")
    //  })
   
    
      handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

    handleSizeChange(val1) {
      // 切换每页显示多少条  pagesize改变的事件
      this.queryInfo.pageNum = val1
        console.log(`每页 ${val1} 条`);
      },
      handleCurrentChange(val2) {
        // 页码值改变的事件
        this.queryInfo.pageSize = val2
        console.log(`当前页: ${val2}`);
      }
}
}
</script>

<style>
 .el-header {

    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

</style>
