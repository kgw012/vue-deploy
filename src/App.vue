<template>
  <div id="app">
    <h1>Todo List</h1>
    <h3>All Todos: {{ allTodoCount }}</h3>
    <h3>Completed Todo: {{ completedTodoCount }}</h3>
    <h3>Uncompleted Todo: {{ uncompletedTodoCount }}</h3>
    <todo-list></todo-list>
    <todo-form></todo-form>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoForm from '@/components/TodoForm'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm,
  },
  computed: {
    // allTodoCount () {
    //   return this.$store.getters.allTodoCount
    // },
    // completedTodoCount () {
    //   return this.$store.getters.completedTodoCount
    // },
    // uncompletedTodoCount () {
    //   return this.$store.getters.uncompletedTodoCount
    // }
    ...mapGetters([
      'allTodoCount',
      'completedTodoCount',
      'uncompletedTodoCount',
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
