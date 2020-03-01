// demo3的子组件

<template>
  <div id="app7">
    <li>{{ todo.text }}</li>
  </div>
</template>

<script>
export default {
  props:['todo'],
  name: 'demo3',
  data(){
      return{
        
      }
  }
}
</script>