<template>
  <div id="app">
    <!-- 使用命名视图 控制同一个路径的视图显示位置 -->
    <router-view></router-view>
    <!-- <div style="display:flex; justify-content: center;margin-top:50px;">
        <button @click="addAction(10)">+</button>
        <h1>{{count}}</h1>
        <button @click="reduce">-</button>
    </div> -->
    <router-view name='a'></router-view>
    <!-- <router-link to="/father" tag='h2' class="father">我是father组件</router-link> -->
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  components: {
    
  },
  mounted(){
  },
  computed:{
    //用mapState替代
     ...mapState(['count']),
    // // count(){
    // //   return this.$store.a.state.count
    // // },
    ...mapGetters(['count']),
    // // count2(){
    // //   return this.$store.a.getters.count
    // // }
  },
  methods:{
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction']),
  }
}
</script>

<style lang='less' scoped>
 .father{
   text-align: center;
   cursor: pointer;
   margin-top:30px;
 }
</style>