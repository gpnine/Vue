<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Element from "./components/element.vue"
import ElementColor from "./components/elementColor.vue"
export default {
  name: 'App',
  components:{Element,ElementColor}
}
</script>

<style>
 
</style>
