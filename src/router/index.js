import Vue from 'vue'
import Router from 'vue-router'
/*
import HelloWorld from '@/components/HelloWorld'
*/
import Home from '@/components/Home'
import Login from '@/components/Login'
import First from '@/components/First'
Vue.use(Router)
/* {
      path: '/',
      component: HelloWorld
    } */
export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: Login
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'login',
          component: Login
        }, {
          path: 'first',
          component: First
        }
      ]
    }
  ]
})
