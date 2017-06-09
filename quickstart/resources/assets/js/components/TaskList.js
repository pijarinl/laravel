import React, { Component } from 'react';

class TaskList extends Component {
	render() {

		var displayTask = (task) => <li>{task}</li>;

		return (
			<ul>
				{this.props.items.map((item,index) => {
					return <li key={item.id}>{item.taskName}</li>
				})}
			</ul>
		);
	}
}

export default TaskList;