<template>
<div style="height: 100%">
  <el-container style="height: 100%">
    <el-aside width="auto" style="height: 100%">
      <common-aside>
      </common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header>

        </common-header>
      </el-header>
      <el-main>
        <div>
          <el-card>
            <el-row class="home" :gutter="24">
              <el-col :span="24">
                <el-form ref="form" :model="form" label-width="70px">
                  <el-col :span="10">
                    <el-form-item label="旅行地点">

                      <el-input v-model="form.name"></el-input>

                    </el-form-item>
                  </el-col>
                  <el-col :span="10">
                  <el-form-item label="旅行时间">

                      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>

                  </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-button type="primary" round class="button">发布</el-button>
                  </el-col>
                </el-form>
                <div style="margin: 20px ;"></div>
                  <el-input
                      type="textarea"
                      placeholder="请输入内容"
                      v-model="textarea"
                      maxlength="5000"
                      show-word-limit>
                  </el-input>

                <div style="margin-bottom: 30px;"></div>
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </el-col>
            </el-row>
          </el-card>


        </div>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
import CommonAside  from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
export default {
  name:'MyNotice',
  components:{
    CommonAside,
    CommonHeader,
  },
  data(){
  return{
    text: '',
    textarea: '',
    dialogImageUrl: '',
    dialogVisible: false,
    form:{
      date1: '',
      date2: '',
    },
  };
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  }

}

</script>

<style lang="less" scoped>
.el-header{
  background-color:#333;
}
button{
  width: 190px;
}
</style>