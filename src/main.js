
import Vue from 'vue'
import App from './app.vue'
import router from './router/router'
import store from './vuex/store'

import './assets/style/global.less'
import './assets/style/style.less'


const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    router,store,
    render:(h)=>h(App)
}).$mount(root)


//全局路由守卫
  router.beforeEach((to, from, next) => {
    console.log('全局前置守卫')
    next()
  })
  router.beforeResolve((to, from, next) => {
    console.log('beforeResolve')
    next()
  })
  router.afterEach((to, from) => {
    console.log('全局后置守卫')
  })


//vue属性
// console.log(app.$data)
// console.log(app.$options)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$root)     //$root===app
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)



