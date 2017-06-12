import dispatcher from '../dispatcher';

export function createTask(taskName){
	dispatcher.dispatch({
		type: "CREATE_TASK",
		taskName,
	});
}
export function deleteTask(id){
	dispatcher.dispatch({
		type: "DELETE_TASK",
		id,
	});
}
export function editTask(id){
	dispatcher.dispatch({
		type: "EDIT_TASK",
		id,
	});
}
export function reloadTask(){
	// axios("http://someurl.com/somedataendpoint").then((data)=>{
	// 	console.log("got the data",data)
	// })
	dispatcher.dispatch({type: "FETCH_TASK"});
	setTimeout(() => {
		dispatcher.dispatch({type: "RECEIVE_TASK", items: [
				{
	 				id:34,
	 			  	taskName:'test3 for task'
	 			},
	 			{
	 				id:43,
	 				taskName:'test4 for task'
	 			}
			]});

		if(false){
			dispatcher.dispatch({type: "FETCH_TASK_ERROR"})
		}
	},1000);
}