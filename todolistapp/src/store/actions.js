import Constant from '../constant';

export default{
	[Constant.ADD_TODO]:({state,commit},payload)=>{
		console.log("### addTodo!!");
		commit(Constant.ADD_TODO,payload);
	},
	[Constant.DONE_TOGGLE]:(store,payload)=>{
		console.log("### doneToggle!!");
		store.commit(Constant.DONE_TOGGLE,payload);
	},
	[Constant.DELETE_TODO]:(store,payload)=>{
		console.log("### deleteToggle!!");
		store.commit(Constant.DELETE_TODO,payload);
	}
}