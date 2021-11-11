import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    todoList: [],
  },
  mutations: {
    ADD_TODO (state, todoItem) {
      state.todoList.push(todoItem)
    },
    TOGGLE_COMPLETE (state, todoItem) {
      // state.todoList.forEach( todo => {
      //   if (todo === todoItem) {
      //     todo.isCompleted = !todo.isCompleted
      //     return
      //   }
      // })
      state.todoList = state.todoList.map(todo => {
        if (todo === todoItem) {
          // return {
          //   content: todo.content,
          //   isCompleted: !todo.isCompleted
          // }
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          }
        } else {
          return todo
        }
      })
    },
    DELETE_TODO (state, todoItem) {
      const idx = state.todoList.indexOf(todoItem)
      state.todoList.splice(idx, 1)
    },
  },
  actions: {
    addTodo ({ commit }, todoItem) {
      commit('ADD_TODO', todoItem)
    },
    toggleComplete: function ({ commit }, todoItem) {
      commit('TOGGLE_COMPLETE', todoItem)
    },
    deleteTodo ({ commit }, todoItem){
      commit('DELETE_TODO', todoItem)
    },
  },
  getters: {
    allTodoCount ({ todoList }) {
      return todoList.length
    },
    completedTodoCount ({ todoList }) {
      return todoList.filter(todo => {
        return todo.isCompleted
      }).length
    },
    uncompletedTodoCount ({ todoList }) {
      return todoList.filter(todo => {
        return !todo.isCompleted
      }).length
    }
  },
})
