import Vue from 'vue'
//import App from './App.vue'
import TodoList from './components/TodoList.vue'

new Vue({
  el: '#app',
  render: h => h(TodoList)
})
