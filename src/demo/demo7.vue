//动态fontsize

<template>
  <div id="example-3">
      <div :style="{ fontSize: postFontSize + 'px' }">
          我是内容
      </div>
      <button @click="add">点我增加</button>
</div>
</template>

<script>
export default {
  name: 'demo4',
  data(){
      return{
        postFontSize:"16"
      }
  },
  methods:{
    add(){
        this.postFontSize++
    }
  }
}
</script>

<style scoped>

</style>