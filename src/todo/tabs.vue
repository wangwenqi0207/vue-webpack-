<template>
    <div class="helper">
        <span class="left">{{this.unfinishedTodo.length}} items left</span>
        <span class="tabs">
            <span v-for="state in states" :key="state" :class="[state, filter === state ? 'actived': '']" @click="toggleFilter(state)">
                {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted">清除已完成</span>
    </div>
</template>

<script>
export default {
    props: {
        filter: {
            type: String,
            required: true  //必传
        },
        todos: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            states: ['全部', '未做', '已完成']
        }
    },
    computed: {
        //页面初始过滤未完成数据 监听展示
        unfinishedTodo: function() {
            return this.todos.filter(todo => todo.completed===false);
        }
    },
    methods: {
        //清除所有已完成
        clearAllCompleted() {
            this.$emit('clearAll');  //未传值 只是通知父组件发生了点击 逻辑在父组件里面判断
        },
        //点击状态按钮
        toggleFilter(state) {
            this.$emit('toggle', state);  //传值
        }
    },
    mounted(){
        
    }
}
</script>

<style lang='less' scoped>
.helper{
    font-weight:100;
    display:flex;
    justify-content:space-between;
    padding: 5px 0;
    line-height:30px;
    background-color :#ffffff;
    font-size:14px;
    // font-smoothing:antialiased;
}
    
.left, .clear, .tabs{
    padding:0 10px;
}  
.left .clear{
     width:150px;
} 
.left{
    text-align:center;
}
.clear{
    text-align:right;
    cursor:pointer;
}
.tabs{
    width:200px;
    display:flex;
    justify-content:space-between;
    *{
        display:inline-block;
        padding:0 10px;
        cursor:pointer;
        border:1px solid rgba(175,47,47,0);
        &.actived{
            border-color:rgba(175,47,47,0.4);
            border-radius:5px;
        }
    }
}          
</style>

