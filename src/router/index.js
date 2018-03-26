import Vue from 'vue'
import Router from 'vue-router'
/*
import HelloWorld from '@/components/HelloWorld'
*/
import Home from '@/components/Home'
import Login from '@/components/Login'
import First from '@/components/First'
import RouterDetail from '@/components/RouterDetail'
import ConditionRender from '@/components/ConditionRender'
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
        }, {
          path: 'routerDetail',
          name: '123',
          component: RouterDetail
        }, {
          path: 'conditionRender',
          name: '124',
          component: ConditionRender
        }
      ]
    }
  ]
})
