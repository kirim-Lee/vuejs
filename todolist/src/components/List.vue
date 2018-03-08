<template>
	<ul>
		<li v-for="(a,index) in todolist" :class="checked(a.done)" v-on:click="TodoToggle(index)">
			{{a.todo}}
			<span v-if="a.done">(완료)</span>
			<span class="close" v-on:click.stop="deleteTodo(index)">x</span>
		</li>
	</ul>
</template>

<script>
	import eventBus from './EventBus.vue';
	export default {
		name: "list",
		data:function(){
			return {
				todolist:[
					{todo:"영화보기",done:false},
					{todo:"주말 산책",done:true},
					{todo:"ES6 학습",done:false},
					{todo:"잠실 야구장",done:false}
				]
			}
		},
		created:function(){
			eventBus.$on('add-todo',this.addTodoList);
		},
		methods:{
			checked:function(done){
				if(done) return {checked:true};
				else return {checked:false};
			},
			TodoToggle:function(index){
				this.todolist[index].done = !this.todolist[index].done;
			},
			deleteTodo:function(index){
				this.todolist.splice(index,1);
			},
			addTodoList:function(todo){
				if(todo!==""){
					this.todolist.push({todo:todo,done:false});
				}
			}
		}
	}
</script>

<style scoped>
	*{box-sizing: border-box;}
	ul{margin:0; padding:0;}
	ul li{
		cursor:pointer; position:relative; padding:12px 8px 12px 40px;
		background:#eee; font-size:14px; transition:0.2s;
		-webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;
	}
	ul li:hover{background:#ddd;}
	ul li.checked{
		background:#888; color:#fff; text-decoration: line-through;
	}
	ul li.checked:before{
		content:""; position:absolute;; border-color: #fff; border-style:solid; border-width:0 1px 1px 0;
		top:10px; left:16px; transform:rotate(45deg); height:8px; width:8px;
	}
	.close{position:absolute; right:0; top:0; padding:12px 16px 12px 16px;}
	.close:hover{background-color: #f44336; color:white;}
</style>