<template>
<div style="height: 100%">
  <el-container style="height: 100%">
    <el-aside width="auto" style="height: 100%">
      <common-aside>
      </common-aside>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
import CommonAside  from "@/components/CommonAside";
export default {
  name:'MyNotice',
  components:{
    CommonAside,
  },
  data(){
  return{}
  }

}

</script>

<style lang="less" scoped>
.el-header{
  background-color:#333;
}
</style>