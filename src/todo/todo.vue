<template>
    <section class="real-app">
        <headers></headers>
        <input 
            type="text" 
            class="add-input"
            autofocus="autofocus"
            placeholder="接下来做什么"
            @keyup.enter="addTodo"
        >
        <Item  
            v-for="todo in filterTodos"
            :todo="todo"
            :key="todo.id"
            @del="deleteTodo"
        />
        <Tabs 
            :filter="filter" 
            :todos="todos"
            @toggle="toggleFilter"
            @clearAll="clearAllCompletedTodo"
        />
    </section>
</template>

<script>
import Item from './item.vue';
import Tabs from './tabs.vue';
import headers from './header.vue';
// import { constants } from 'crypto';

let id = 0;

export default {
    data() {
        return {
            todos: [],  //list
            filter: '全部'
        }
    },
    components: {
        Item,
        Tabs,
        headers
    },
    computed: {
        filterTodos() {
            if(this.filter === '全部') {
                return this.todos;
            }
            const filterCompleted = this.filter === '已完成';
            return this.todos.filter(todo=> todo.completed===filterCompleted);
        }
    },
    methods: {
        //input 按下enter事件 给todo中添加条目
        addTodo(e) {
            this.todos.unshift({
                id: id++,
                content: e.target.value,
                completed: false
            });

            e.target.value = '';
        },
        //点击当前todo删除
        deleteTodo(id) {
            this.todos.splice(this.todos.findIndex(todo => id === todo.id), 1);
        },
        //点击状态按钮
        toggleFilter(state) {
            console.log('我是state',state);
            this.filter = state;
        },
        //清除所有已完成 todo.completed设为false
        clearAllCompletedTodo() {
            this.todos = this.todos.filter(todo=> todo.completed===false);
        }
    }
}
</script>

<style  lang='less' scoped>
.real-app{
    width:600px;
    margin:0 auto;
    box-shadow:0 0 5px #666;
}
.add-input{
    position:relative;
    margin:0;
    width:100%;
    font-size:24px;
    font-family:inherit;
    font-weight:inherit ;
    line-height:1.4em;
    border:none;
    outline:none;
    color:inherit; 
    box-sizing:border-box;
    // font-smoothing:antialiased;
    padding:16px 16px 16px 36px;
    border:none;
    box-shadow:inset 0 -2px 1px rgba(0, 0, 0, 0.03);
} 
</style>


