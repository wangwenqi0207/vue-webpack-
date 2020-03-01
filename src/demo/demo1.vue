//循环JSON数据 v-pre
<template>
  <div id="app">
    <ul>
        <li v-for="(val, key,index) in obj" :key='index'>
           <p>{{val}}:{{key}}</p>
        </li>
    </ul>
    <!-- v-pre出现差值表达式不会被解析 -->
    <p v-pre>{{text}}</p>
  </div>
</template>

<script>
export default {
  data(){
      return{
          obj:{
              a:"123",
              b:"456",
              c:"789"
          }
      }
   }
}
</script>

<style lang='less' scoped>
 
</style>