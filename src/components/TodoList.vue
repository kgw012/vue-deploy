<template>
  <div>
    <todo-list-item
      v-for="(todoItem, idx) in todoList"
      :key="idx"
      :todoItem="todoItem"
    ></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'
import { mapState } from 'vuex'

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  computed: {
    // todoList () {
    //   return this.$store.state.todoList
    // }
    ...mapState([
      'todoList'
    ])
  },
}
</script>

<style>

</style>