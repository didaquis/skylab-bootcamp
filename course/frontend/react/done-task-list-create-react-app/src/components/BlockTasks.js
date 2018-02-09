import React from 'react';

import TitleOfSection from './TitleOfSection';
import InputSubmit from './InputSubmit';
import SuccessButton from './SuccessButton';
import ToDoTasksList from './ToDoTasksList';
import ToDoTaskCounter from './ToDoTaskCounter';

function BlockTasks(props){
	return (
		<div className="col-md-6">
			<div className="todolist not-done">
				<TitleOfSection text={'Todos'} />
				<InputSubmit 
					onSubmit={props.onAddNewTask} 
					placeholder={'Add todo'} 
					/>
				<SuccessButton 
					label={'Mark all as done'} onPushButton={props.onMarkAllTaskAsCompleted} />
				<hr />
				<ToDoTasksList 
					onSelectOneItem={props.onMarkOneTaskAsCompleted} 
					tasksToDo={props.tasksToDo} 
					/>
				<ToDoTaskCounter tasksToDo={props.tasksToDo} />
			</div>
		</div>
	);
}

export default BlockTasks;