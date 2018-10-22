<template>
  <div class="header">
    <el-menu class="el-menu-demo">
      <div class="logo">
        <img src="../assets/logo2.png">
      </div>
      <el-submenu index="3">
        <template slot="title">{{name}}(系统管理员)</template>
        <el-menu-item index="2-1" @click="signOut">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          name: window.localStorage.getItem('name')
        }
      },
      methods:{
        signOut(){
          this.$router.push({path: '/'});
        }
      }
    }
</script>

<style lang="scss" scoped>
  .header {
    .el-menu-demo {
      display: flex;
    }
    .logo {
      flex: 1;
      position: relative;
    }
  }
  
</style>
