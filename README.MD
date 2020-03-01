npm i stylus stylus-loader -D
npm i less less-loader -D

自己搭的webpack-vue项目

生命周期
数据相关的操作 可以放在created里面也可放在mounted里面
dom相关操作 必须放在mounted里面
服务端渲染时只会触发beforeCreate和created，不会渲染beforeMounted和mounted

watch和computed监听值不要修改值，可能会导致无限循环
尽量不要修改监听的属性
v-if的性能是不如v-show的

如果data不用function定义 那么同一组件在使用两次的时候 data中的数据会互相污染

子节点最好不要修改 父节点直接传进来的props值

一个子组件模板，功能要求略有不同，使用场景类似可以用同一个子组件，父组件可给子组件传值改变内部数据

利用父子组件传值 插槽 同一子组件可以改变内部结构 使其展示效果有区别

作用域插槽 用于父组件想使用子组件的数据时使用

尽量不要在组件中使用$route 让路由和组件解耦