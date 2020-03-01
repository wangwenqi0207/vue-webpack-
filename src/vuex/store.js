import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


//module模块组 将不同的Store分模块管理

const state={
    count:0
}

//mutations接受参数 state仓库 n是传的值
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}

//getters计算过滤操作
//可以把他看作在获取数据之前进行的一种再编辑,相当于对数据的一个过滤和加工。
//类似于计算属性。
const getters = {
    count:function(state){
        return state.count +=10;
    }
}

//异步处理逻辑
//actions是可以调用Mutations里的方法的 context上下文对象，这里你可以理解称store本身
const actions ={
    addAction(context){
        context.commit('add',10);
        //先加 加完后调用reduce减1
        setTimeout(function(){ 
            context.commit("reduce")
        }, 1000);
    },
    reduceAction({commit}){
        commit('reduce')
    }
}


const moduleA={
    state,mutations,getters,actions
}

//将moduleA这个Store导出
export default new Vuex.Store({
	modules:{a:moduleA}
})

//使用时：<h3>{{$store.state.a.count}}</h3>
//computed:{
//     count(){
//         return this.$store.state.a.count;
//     }
// },

