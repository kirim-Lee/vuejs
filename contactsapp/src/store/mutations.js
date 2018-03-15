import Constant from '../constant';

export default{
	[Constant.ADD_CONTACT_FORM]:(state)=>{
		state.contact={no:0,name:'',tel:'',address:'',photo:''};
		state.mode='add';
		state.currentView='ContactForm';
	},
	[Constant.CANCEL_FORM]:(state)=>{
		state.currentView=null;
	},
	[Constant.EDIT_CONTACT_FORM]:(state,payload)=>{
		state.contact=payload.contact;
		state.mode='update';
		state.currentView='ContactForm';
	},
	[Constant.EDIT_PHOTO_FORM]:(state,payload)=>{
		state.contact=payload.contact;
		state.currentView='UpdatePhoto';
	},
	[Constant.FETCH_CONTACTS]:(state,payload)=>{
		state.contactlist=payload.contactlist;
		state.currentView=null;
	},
	[Constant.CHANGE_MODE]:(state,payload)=>{
		state.mode=payload.mode;
	}
}