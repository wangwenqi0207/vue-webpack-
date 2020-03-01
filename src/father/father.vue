//父组件传值，控制相同子组件内部不同变化
<template>
  <div id="app">
    <!-- son组件 -->
    <son :show="false">
       <span slot="header">我是子组件header</span>
       <!-- 父元素自定义接收的 getValue 名 -->
       <p slot-scope="getValue">{{getValue.value}} {{getValue.value2}}</p>
    </son>

    <son :show="true" :text=text  @handleClick='handleClick'>
      <span slot="body">我是子组件body</span>
    </son>
  </div>
</template>

<script>
import son from './son.vue'
export default {
  //祖先给后代传值 祖辈使用provide函数定义值 但是当父组件传的值改变时 子孙组件的值不会同步改变
  //要同步改变需要用到Object.defineProperty 但vue官方不推荐这么用 vue升级可能会报错 
  provide(){
    const data={}
    Object.defineProperty(data,'text',{
      get:()=>this.text,
      enumerable:true
    })
    return{
         yeye:this,
         data
    }
  },
  components:{
      son
  },
  data(){
      return{
        text:12
      }
  },
  methods:{
    //父元素接收子元素的点击事件 修改逻辑
    handleClick(){
      this.text= this.text+1
    }
  }
}

</script>
<style lang='less' scoped>
 
</style>