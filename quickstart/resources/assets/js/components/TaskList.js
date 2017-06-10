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
			<table className="table table-striped task-table">
				<thead>
                    <th>Task</th>
                    <th>&nbsp;</th>
                </thead>
                <tbody>
				{this.props.items.map((item,index) => {
					return <tr><td  className="table-text" key={item.id}> 
								<div> {item.taskName} </div> 
							</td>
							<td>
								<button type="button" 
									 className="btn btn-danger" onClick={this.removeTask.bind('this',item.id)}>Delete
								</button>
							</td></tr>	
				})}
				</tbody>
			</table>
		);
	}
}

export default TaskList;