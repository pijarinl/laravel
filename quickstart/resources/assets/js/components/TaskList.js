import React, { Component } from 'react';

class TaskList extends Component {

	constructor(props) {
		super(props);
		this.removeTask = this.removeTask.bind(this);
	};

	removeTask(taskId,event){

		event.preventDefault();
		console.log('remove: '+ taskId)
		this.props.remove(taskId);

		return;

	}

	render() {

		var displayTask = (task) => <li>{task}</li>;

		return (
			<ul>
				{this.props.items.map((item,index) => {
					return <li key={item.id}>{item.taskName}
						<button type="button" 
							onClick={this.removeTask.bind('this',item.id)}>Delete
						</button></li>
				})}
			</ul>
		);
	}
}

export default TaskList;