<template>
  <div>
    <v-header></v-header>
    <v-menu></v-menu>
    <div class="content">
      <transition name="el-zoom-in-top">
        <router-view v-show="show"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import header from '@/components/header'
import leftMenu from '@/components/leftMenu'
    export default {
      data() {
        return {
          show: true
        }
      },
      components:{
        'v-menu':leftMenu,
        'v-header':header
      }
  }
</script>

<style>
  .content {
    position: absolute;
    left: 200px;
    top: 70px;
    bottom: 0;
    overflow: scroll;
    width: calc(100% - 210px);
  }
</style>
