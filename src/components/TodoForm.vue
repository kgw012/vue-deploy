<template>
  <div>
    <input 
      v-model.trim="todoContent"
      @keyup.enter="addTodo"
      class="m-3"
      type="text">
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data: function () {
    return {
      todoContent: null,
    }
  },
  methods: {
    addTodo () {
      const todoItem = {
        content: this.todoContent,
        isCompleted: false
      }
      if (todoItem.content) {
        this.$store.dispatch('addTodo', todoItem)
      }
      this.todoContent = null
    }
  }
}
</script>

<style scoped>
  .m-3 {
    margin: 1rem;
  }
</style>