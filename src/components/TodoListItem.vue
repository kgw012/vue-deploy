<template>
  <div>
    <span 
      @click="toggleComplete(todoItem)"
      @mouseover="mouseOver"
      :class="[
            'mx-3',
            {
              'is-completed': todoItem.isCompleted,
              'mouse-pointer': mouseHover
            }]"
    >{{ todoItem.content }}</span>
    <button @click="deleteTodo(todoItem)">Delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TodoListItem',
  props: {
    todoItem: Object,
  },
  data () {
    return {
      mouseHover: false
    }
  },
  methods: {
    ...mapActions([
      'toggleComplete',
      'deleteTodo',
    ]),
    // toggleComplete () {
    //   this.$store.dispatch('toggleComplete', this.todoItem)
    // },
    // deleteTodo () {
    //   this.$store.dispatch('deleteTodo', this.todoItem)
    // },
    mouseOver () {
      this.mouseHover = true
    },
  }
}
</script>

<style scoped>
  .mx-3 {
    margin: 0 1rem;
  }

  .is-completed {
    text-decoration: line-through;
  }

  .mouse-pointer {
    cursor: pointer;
  }
</style>