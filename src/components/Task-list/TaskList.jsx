import React from 'react';
import TaskListItem from './Task-list-item/TaskListItem';
import { deleteTaskActionCreator, importantTaskActionCreator } from './../../redux/reducer';

import { connect } from 'react-redux';


let TaskList = (props) => {
	console.log(props)
	return (
		<ul>
			{
				props.tasks.map((task) => {
					return (
							<li key={task.id}>
								<TaskListItem task={task.label} taskID ={task.id} deleteItem={props.deleteItem} toggleImportantTask = {props.toggleImportantTask}/>
							</li>
					)
				})
			}
		</ul>
	)
}

let mapStateToProps = (state) => {
	return {
		tasks: state.tasks
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		deleteItem: (id) => {
			dispatch(deleteTaskActionCreator(id));
		},
		toggleImportantTask: (id) => {
			dispatch(importantTaskActionCreator(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);