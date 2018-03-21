<template>
	<transition-group name="list" tag="ul">
		<li v-for="(a,index) in todolist" :class="checked(a.done)" v-on:click="doneToggle({index:index})" :key="index">
			{{a.todo}}
			<span v-if="a.done">(완료)</span>
			<span class="close" v-on:click.stop="deleteTodo({index:index})">x</span>
		</li>
	</transition-group>
</template>

<script>
	//import eventBus from './EventBus.vue';
	import Constant from '../constant';
	import {mapState,mapActions} from 'vuex';
	import _ from 'lodash';

	export default {
		name: "list",
		computed:mapState(['todolist']),
		methods:_.extend({
				checked: function (done) {
					if (done) return {checked: true};
					else return {checked: false};
				}
			},
			mapActions([Constant.DONE_TOGGLE,Constant.DELETE_TODO])
		)
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
	.list-enter-active, .list-leave-active{ transition:all 0.2s;}
	.list-enter, .list-leave-to{
		opacity:0; transform:translateY(50px);
	}
</style>