//孙子组件
<template>
  <div id="app">
      <p>我负责展示爷爷的值{{data.text}}</p>
  </div>
</template>

<script>
export default {
//祖先传值 孙辈用inject接收祖先传来的值
  inject:['yeye','data'],
  mounted(){
    // console.log(this.yeye)
  }
}

</script>
<style lang='less' scoped>
.text1{
    background: #ccc;
}
</style>