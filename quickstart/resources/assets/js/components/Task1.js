import React from 'react';
import TaskList from './TaskList';
import update from 'immutability-helper';

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
	 	this.removeTask = this.removeTask.bind(this);
	 	this.saveTask = this.saveTask.bind(this);

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

	removeTask(taskId){
		console.log(taskId)
		var items = this.state.items;
		items = items.filter(function(eT){
			return eT.id !==taskId;
		});

		this.setState({items});
		return;
	}

	saveTask(idTask,newTask){
		// console.log(this.state.items);
		var index = this.state.items.findIndex(item => item.id == idTask)
		// item.taskName = newTask;
		this.setState({items: update(this.state.items, {
			[index]: {
				taskName: {$set: newTask}
			}
		})})
		// console.log(this.state.items)
	}

	render(){
		return(
			<div className="form-group">
				<form onSubmit={this.addTask.bind('this', this.state.task)} className="form-horizontal">
					<label  className="col-sm-3 control-label"> Task </label>
					<input onChange={this.onChange} value={this.state.task} className="form-control"/>
					<button className="btn btn-default fa fa-plus">Add Task</button>
				</form>
				<div className = "panel panel-default">
					<div className="panel-heading">
                   	 	Current Tasks
                	</div>
                	<div className="panel-body">
						<TaskList items={this.state.items}
							removeTask={this.removeTask} 
							saveTask={this.saveTask}/>
					</div>
				</div>
			</div>

			);
	}
}
export default Task1;
