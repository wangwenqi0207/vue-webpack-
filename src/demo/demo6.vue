//修饰符

<template>
  <div id="example-3">
  <!-- lazy在“change”时而非“input”时更新 -->
  <input v-model.lazy="msg">
  转换数字
  <input v-model.number="age" type="number">
  去收尾空格
  <input v-model.trim="msg">
</div>
</template>

<script>
export default {
  name: 'demo4',
  data(){
      return{
        msg:"",
        age:""
      }
  },
  methods:{
    
  }
}
</script>

<style scoped>

</style>