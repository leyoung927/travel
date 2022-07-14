<template xmlns:el-row="http://www.w3.org/1999/html">
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
          <el-row class="home" :gutter="20">
            <el-col :span="10">
              <div>
                <el-card  shadow="hover">
                  <div class="user">
                    <img :src="userImg">
                    <div class="userinfo">
                      <p class="name">&#160;&#160;&#160;&#160;马亦非</p>
                      <p> </p>
                      <p class="access">&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;普通用户</p>

                    </div>
                  </div>
                  <div class="login-info">
                    <p>上次登录时间:<span>2022-7-14</span></p>
                    <p></p>
                    <p>上次登录地点:<span>阿姆斯特丹</span></p>

                  </div>
                </el-card>
              </div>

              <div>
                <el-card shadow="hover">
                  <div class="text item">
                    <el-descriptions column="1" title="用户信息">
                      <template slot="extra">
                        <el-button type="primary" size="medium" >修改</el-button>
                      </template>
                      <el-descriptions-item label="用户名">马亦非</el-descriptions-item>

                      <el-descriptions-item label="手机号">16729394239</el-descriptions-item>

                      <el-descriptions-item label="邮箱">1328432308@qq.com</el-descriptions-item>

                      <el-descriptions-item label="密码">214284825</el-descriptions-item>

                      <el-descriptions-item label="认证情况">
                        <template>
                        <el-radio disabled v-model="radio" label="禁用">未认证</el-radio>
                        <el-radio disabled v-model="radio" label="选中且禁用">已认证</el-radio>
                        </template>
                      </el-descriptions-item>

                    </el-descriptions>
                  </div>
                </el-card>
              </div>
              <div>

              </div>
            </el-col>
            <el-col :span="14">
              <div>
                <el-card>
                  <div slot="header" class="clearfix">
                    <span>发布历史</span>
                    <el-button style="float: right; padding: 3px 0" type="text">发布管理</el-button>
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside  from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
export default {
  name: "PersonalCenter",
  components:{
    CommonAside,
    CommonHeader,
  },
  computed: {
    discover() {
      return this.discovery;
    }
  },
  data(){
    return{

      userImg: require('../assets/images/user.png'),
      radio: '选中且禁用',
      discovery:[

      ]
    }
  },

}
</script>

<style scoped>
.el-card{
  margin-bottom:30px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.el-header{
  background-color:#333;
}
.el-row {
  margin-bottom: 20px;

}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>