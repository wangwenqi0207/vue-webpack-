
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import todo from '../todo/todo.vue'  //引入根目录下的Hello.vue组件
import login from '../login/login.vue' 
import father from '../father/father.vue'
 
Vue.use(Router)  //Vue全局使用Router
 
const router = new Router({
//mode:'history',
fallback:true, //无法识别history路由的浏览器，自动变成hash模式
  routes: [  
    {                    
      path: '/',             
      component: todo ,
    },   
    // /app路径下 默认todo组件在上 login组件在下       
    {                    
      path: '/app',             
      components:{
        default:todo,
        a:login
    },
      // name:'app',
      // meta:{
      //     title:'this is app',
      //     description:'sss'
      // }
    },
    // /login路径下 默认login组件在上 todo组件在下
    {                    
      path: '/login',             
       components:{
        default:login,
        a:todo
    },
    },
    {                    
      path: '/father',             
      component: father ,
    },
  ]
})

export default router

