// 声明式渲染  鼠标悬停显示信息

<template>
  <div id="app2">
  <span :title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>
</template>

<script>
export default {
  name: 'demo1',
  data(){
      return{
        message: '页面加载于 ' + new Date().toLocaleString()
      }
  }
}
</script>