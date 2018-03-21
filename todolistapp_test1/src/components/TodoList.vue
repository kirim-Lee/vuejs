<template>
	<div>
		<div class="header">
			<h2>Todo List</h2>
			<input-todo></input-todo>
		</div>
		<list></list>
	</div>
</template>

<script>
	import InputTodo from "./InputTodo.vue";
	import list from './List.vue';
	export default {
		name: "todo-list",
		components:{InputTodo, list}
	}
</script>

<style scoped>
	*{box-sizing: border-box;}
	.header{
		background-color: purple; padding:30px 30px; color:yellow; text-align: center;
	}
	.header:after{
		content:""; display: table; clear: both;
	}
</style>