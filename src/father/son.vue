//子组件
<template>
  <div id="app">
    <p style="color:red;">我是同一子组件</p>
    <p v-show='show' @click="handleClick" style="font-size:20px;font-weight:600">点击我,父组件传值++{{text}}</p>
    <div :style=style>
      <slot name='header'></slot>
      <slot name='body' ></slot>
      <!-- 自定义value传递给父元素 -->
      <slot value="作用域插槽的值1" value2='作用域插槽的值2'></slot>
      <div>
        <grandson></grandson>
      </div>
    </div>
  </div>
</template>

<script>
import grandson from './grandson.vue'
export default {
  components:{
    grandson
  },
  props:{
      show:Boolean,
      text:Number,
  },
  data(){
      return{
        //子节点最好不要修改父节点直接传进来的props值 例如:this.show=xxx  如果要修改 传事件给父元素
        style:{
          width:"200px",
          height:"200px",
          border:'1px solid #aaa'
        }
      }
  },
  methods:{
    //告诉父元素我被点击了
    handleClick(){
      this.$emit('handleClick')
    }
  }
}
</script>

<style lang='less' scoped>
#app{
  margin-left:30px;
}
</style>