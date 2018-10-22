<template>
  <div  class="leftMenu">
    <el-menu @open="handleOpen" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>图表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/echarts">坐标系</el-menu-item>
          <el-menu-item index="1-2">饼状图</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>基础图表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">组件1</el-menu-item>
          <el-menu-item index="2-2">组件2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">Markdown</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    export default {
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style>
  .leftMenu {
    display: block;
    position: fixed;
    bottom: 0;
    top: 66px;
    width: 205px;
    left: 10px;
  }
  ul {
      height: 100%;
      border-radius: 0;
  }
</style>
