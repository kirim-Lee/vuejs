import Vue from 'vue'
//import App from './App.vue'
import store from './store'
import TodoList from './components/TodoList.vue'

new Vue({
    store,
	el: '#app',
	render: h => h(TodoList)
})
