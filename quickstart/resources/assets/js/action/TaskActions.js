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