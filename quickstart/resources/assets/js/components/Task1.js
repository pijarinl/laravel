import React from 'react';
import TaskList from './TaskList';
import newId from './newId';

class Task1 extends React.Component{

	constructor() {
	 	super();

	 	this.state = {
	 		
	 		items:[
	 			{
	 				id:1,
	 			  	taskName:'test for task'
	 			},
	 			{
	 				id:2,
	 				taskName:'test2 for task'
	 			}
	 		],
	 		task : ''
	 	}

	 	this.onChange = this.onChange.bind(this);
	 	this.addTask = this.addTask.bind(this);
	 };

	addTask(taskName, event){

		event.preventDefault();

		if(!taskName){
			return;
		}
		var items = this.state.items;
		var id = Math.random();
		items = items.concat([{id,taskName}]);

		var task = '';

		this.setState({items,task});

	}

	onChange(e){

		this.setState({task: e.target.value});

	}

	render(){
		return(
			<div>
				<form onSubmit={this.addTask.bind('this', this.state.task)}>
					<label> Task </label>
					<input onChange={this.onChange} value={this.state.task}/>
					<button>Add Task</button>
				</form>
				<TaskList items={this.state.items} />
			</div>

			);
	}
}
export default Task1;
