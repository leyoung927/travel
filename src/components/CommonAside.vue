<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item v-for="item in noChildren" index="item.path" :key="item.path">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
  </el-menu>



</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menu:[
        {
          path:'/notice',
          name:'notice',
          label:'首页',
          icon:'edit',
          url:'MyNotice/MyNotice'
        },
        {
          path:'/site',
          name:'site',
          label:'景点查询',
          icon:'location-outline',
          url:'SiteSearch/SiteSearch'
        },
        {
          path:'/strategy',
          name:'strategy',
          label:'攻略搜索',
          icon:'search',
          url:'StrategySearch/StrategySearch'
        },
        {
          path:'/users',
          name:'users',
          label:'个人中心',
          icon:'user',
          url:'PersonalCenter/PersonalCenter'
        },
          ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    },
  computed:{
    noChildren(){
      return this.menu.filter(item => !item.children);
    },
  }
}
</script>