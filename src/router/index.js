import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import mainView from '@/view/MainView'
import main from '@/view/Main'
import bookDetail from '@/view/BookDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }, {
      path: '/',
      component: main,
      alias: ['/mainView',],
      children: [
        {
          path: '',
          name: 'mainView',
          component: mainView,
        }, {
          path: ':currentPage',
          component: mainView,
        },]
    },
    {
      path: '/bookDetail/:book',
      name: 'bookDetail',
      component: bookDetail,

    },
  ]
})
