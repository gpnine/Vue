import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Hello from '@/components/HelloWorld'
import Home from '@/components/home'
import Table from '@/pages/echarts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Login
    },
    {
      path: '/hello',
      component:Hello
    },
     {
      path: '/home',
      component:Home,
      children:[
        {
          path: '/home/',
          redirect: '/home/echarts',
          component:Table,
          children: [{
            path: '/home/echarts/',
          }]
        }
      ]
    }
  ]
})
