import {EventEmitter} from "events";

import dispatcher from '../dispatcher'

class TaskStore extends EventEmitter{
 	constructor(props) {
 		super(props);
 		this.items = [
 				{
	 				id:1,
	 			  	taskName:'test for task'
	 			},
	 			{
	 				id:2,
	 				taskName:'test2 for task'
	 			}
 		];
 	}
 	createTask(taskName){
 		const id = Math.random();

 		this.items.push({
 			id,
 			taskName,

 		});

 		this.emit("change");
 	}

 	getAll(){
 		return this.items;
 	}

 	handleAction(action){
 		//respone only we care about if not dont do anything
 		switch(action.type){
 			case "CREATE_TASK" : {
 				this.createTask(action.taskName);
 			}
 		}
 		console.log("Task an action ", action);

 	}
}
const taskStore = new TaskStore;


dispatcher.register(taskStore.handleAction.bind(taskStore));
window.dispatcher = dispatcher; 
export default taskStore;