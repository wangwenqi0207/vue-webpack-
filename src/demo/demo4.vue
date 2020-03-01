//不同元素绑定同一事件 传值
<template>
  <div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
</template>

<script>
export default {
  name: 'demo4',
  data(){
      return{
        
      }
  },
  methods:{
     say (message) {
      alert(message)
    }
  }
}
</script>

<style scoped>

</style>