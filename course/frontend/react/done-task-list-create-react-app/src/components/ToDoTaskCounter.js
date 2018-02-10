import React from 'react';

function ToDoTaskCounter(props){
	return(
		<div className="todo-footer">
			<strong><span className="count-todos">{props.tasksToDo.reduce((accum, task) => task.completedTask ? accum : ++accum, 0)}</span></strong> Items Left
		</div>
	);
}

export default ToDoTaskCounter;