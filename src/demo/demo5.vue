//表单v-model  勾选自动转换true和false
//勾选获取checkbox radio值
<template>
  <div id="example-3">

    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <div id='example-3' style="margin-top:30px;">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names:{{ checkedNames }}</span>
    </div>

    <div id="example-4" style="margin-top:30px;">
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>

    <div id="example-5" style="margin-top:30px;">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <!-- 在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下
    ，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。 -->
</div>
</template>

<script>
export default {
  name: 'demo5',
  data(){
      return{
        checked:'false',
        checkedNames: [],
        picked: '',
        selected: ''
      }
  },
  methods:{
     
  }
}
</script>

<style scoped>

</style>