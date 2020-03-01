// 组件化及简单父子传值

<template>
  <div id="app7">
  <ol>
      <demo3Son
        v-for='item in groceryList'
        :key=item.id
        :todo="item"
      />
  </ol>
</div>
</template>

<script>
import demo3Son from './demo3-son'
export default {
  components:{
    demo3Son
  },
  name: 'demo3',
  data(){
      return{
        groceryList: [
          { id: 0, text: '蔬菜' },
          { id: 1, text: '奶酪' },
          { id: 2, text: '随便其它什么人吃的东西'}
      ]
    }
  }
}
</script>